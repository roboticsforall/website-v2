"use client";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { ChevronLeftIcon, ChevronRightIcon, InfoIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  HStack,
  Text,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Grid,
  GridItem,
  CloseButton,
  Skeleton,
  SliderMark,
  Container,
  Hide,
  Flex,
  IconButton,
} from "@chakra-ui/react";
import { Content, createClient } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { IFilterOptionType, IFilterType } from "..";
import { TextBlock } from "@/app/components/TextBlock";

const client = createClient("rfa-cms");

const filterOptions: IFilterOptionType = {
  subject: {
    filterName: "Subject",
    checkbox: [
      { label: "Programming", value: "Programming" },
      { label: "Kit-based", value: "Kit-based" },
      { label: "CAD", value: "CAD" },
      { label: "Science", value: "Science" },
    ],
  },
  requiredTechnology: {
    filterName: "Minimum Technology Required",
    checkbox: [
      { label: "Computer", value: "Computer" },
      { label: "Mobile", value: "Mobile" },
      { label: "Computer or Mobile", value: "Computer or Mobile" },
    ],
  },
  grade: {
    filterName: "Grade Level",
    slider: {
      label: "Course Grade Level Slider",
      min: 0,
      max: 12,
      step: 1,
      defaultValue: -1,
    },
  },
};

const ITEMS_PER_PAGE = 5;

const ForSchoolsAndPartnersCourseListing = ({
  course_listing,
  heading_text_block,
}: Content.CourseListingSliceDefaultPrimary): JSX.Element => {
  const [data, setData] =
    useState<Content.CourseListingDocument<string> | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState<IFilterType>({
    enrollmentStatus: [],
    subject: [],
    requiredTechnology: [],
    grade: -1,
  });
  const [sliderValue, setSliderValue] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState(1);

  async function getCourseData() {
    const data = await client.getByUID(
      "course_listing",
      (course_listing as { uid: string }).uid
    );
    data.data.courses.sort((a, b) => {
      return (a.open_for_enrollment ? 0 : 1) - (b.open_for_enrollment ? 0 : 1);
    });
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getCourseData();
  }, []);

  const handleCheckboxChange = useCallback((section: string, value: string) => {
    setCurrentPage(1);
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const sectionFilters = prevFilters[section] as string[];
      if (sectionFilters.includes(value)) {
        updatedFilters[section] = sectionFilters.filter(
          (item) => item !== value
        );
      } else {
        updatedFilters[section] = [...sectionFilters, value];
      }
      return updatedFilters;
    });
  }, []);

  const clearFilter = useCallback((section: string) => {
    setCurrentPage(1);
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (Array.isArray(updatedFilters[section])) {
        updatedFilters[section] = [];
      } else if (typeof updatedFilters[section] === "number") {
        updatedFilters[section] = -1;
        if (section === "grade") {
          setSliderValue(-1);
        }
      }
      return updatedFilters;
    });
  }, []);

  const handleSliderChanged = useCallback((value: number) => {
    setCurrentPage(1);
    setSliderValue(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      grade: value,
    }));
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.data.courses.filter((course) => {
      const enrollmentStatus = filters.enrollmentStatus as string[];
      const grade = filters.grade as number;
      const subject = filters.subject as string[];
      const technology = filters.requiredTechnology as string[];

      const enrollmentStatusFilter =
        !enrollmentStatus.length ||
        enrollmentStatus.includes(course.open_for_enrollment.toString());

      const gradeFilter =
        grade == null ||
        grade == -1 ||
        (grade >= course.minimum_grade! && grade <= course.maximum_grade!);

      const subjectFilter = !subject.length || subject.includes(course.subject);

      const technologyFilter =
        !technology.length || technology.includes(course.minimum_technology!);

      return (
        enrollmentStatusFilter &&
        gradeFilter &&
        subjectFilter &&
        technologyFilter
      );
    });
  }, [data, filters]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCourses = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  if (isLoading)
    return (
      <ContainerWrapper>
        <Stack>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
          <Skeleton height="100px"></Skeleton>
        </Stack>
      </ContainerWrapper>
    );
  if (!data) return <p>No profile data</p>;

  return (
    <ContainerWrapper>
      <Stack gap={"2.5rem"}>
        <Container p={0} textAlign={{ md: "center" }}>
          <TextBlock textBlock={heading_text_block} />
        </Container>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="1.5rem">
          <GridItem>
            <Stack py={2}>
              {Object.keys(filterOptions).map((section) => {
                const sectionOptions = filterOptions[section];

                return (
                  <Box key={section}>
                    <HStack spacing={1}>
                      <Text fontWeight="bold">{sectionOptions.filterName}</Text>
                      <CloseButton
                        aria-label={`Clear ${section} Filter`}
                        onClick={() => clearFilter(section)}
                      />
                    </HStack>
                    {sectionOptions.checkbox &&
                      sectionOptions.checkbox.map((checkboxInfo) => (
                        <Box key={checkboxInfo.value}>
                          <Checkbox
                            value={checkboxInfo.value}
                            onChange={() =>
                              handleCheckboxChange(section, checkboxInfo.value)
                            }
                            isChecked={(filters[section] as string[]).includes(
                              checkboxInfo.value
                            )}
                          >
                            {checkboxInfo.label}
                          </Checkbox>
                        </Box>
                      ))}
                    {sectionOptions.slider && (
                      <HStack spacing={2} alignItems="center">
                        <Slider
                          aria-label={sectionOptions.slider.label}
                          onChange={handleSliderChanged}
                          min={sectionOptions.slider.min}
                          max={sectionOptions.slider.max}
                          step={sectionOptions.slider.step}
                          defaultValue={sectionOptions.slider.defaultValue}
                          value={sliderValue}
                          width={{ base: "100%", md: "60%" }}
                        >
                          <SliderMark value={0} mt="2" fontSize="sm">
                            K
                          </SliderMark>
                          <SliderMark value={6} mt="2" fontSize="sm">
                            6
                          </SliderMark>
                          <SliderMark value={12} mt="2" fontSize="sm">
                            12
                          </SliderMark>
                          <SliderTrack>
                            <SliderFilledTrack bg="yellow.yellow3" />
                          </SliderTrack>
                          <SliderThumb boxSize={6} />
                        </Slider>
                        <Box
                          ml={4}
                          p={2}
                          borderWidth={1}
                          borderRadius="md"
                          borderColor="gray.200"
                          width="40px"
                          textAlign="center"
                        >
                          <Text fontSize="sm">
                            {sliderValue === -1
                              ? ""
                              : sliderValue === 0
                                ? "K"
                                : sliderValue}
                          </Text>
                        </Box>
                      </HStack>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </GridItem>
          <GridItem>
            {/* Pagination Controls */}
            <HStack mb={"1.5rem"} spacing={4}>
              <IconButton
                icon={<ChevronLeftIcon color="black" boxSize={6} />}
                isDisabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous Page"
                sx={{
                  backgroundColor: "transparent",
                  _hover: {
                    backgroundColor: "gray.200", // Change to your desired gray color
                    transition: "background-color 0.3s ease", // Smooth transition
                  },
                }}
              />

              {/* Page Numbers */}
              {Array.from({ length: totalPages }, (_, index) => (
                <Text
                  key={index}
                  fontWeight={currentPage === index + 1 ? "bold" : "normal"}
                  borderWidth={currentPage === index + 1 ? 2 : "none"}
                  borderRadius={"md"}
                  padding={3}
                  width={8} // Set a fixed width for square shape
                  height={8} // Set a fixed height for square shape
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Text>
              ))}

              <IconButton
                icon={<ChevronRightIcon color="black" boxSize={6} />}
                isDisabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next Page"
                sx={{
                  backgroundColor: "transparent",
                  _hover: {
                    backgroundColor: "gray.200", // Change to your desired gray color
                    transition: "background-color 0.3s ease", // Smooth transition
                  },
                }}
              />
            </HStack>
            <Accordion allowMultiple>
              <Stack mb={"1.25rem"}>
                {currentCourses.map((item) => (
                  <AccordionItem key={item.course_name} borderWidth={1}>
                    <AccordionButton p={0}>
                      <Hide below="md">
                        <Box py={4}>
                          <PrismicNextImage
                            width={"150"}
                            height={"150"}
                            field={item.image}
                            style={{ padding: "12px" }}
                          />
                        </Box>
                      </Hide>
                      <Stack
                        gap={"1rem"}
                        pl={{ base: 3, md: 0, lg: 0 }}
                        py={3}
                        flex={1}
                        textAlign={"start"}
                      >
                        <CustomHeading as="h4">
                          {item.course_name}
                        </CustomHeading>
                        <Flex
                          flexDirection={{ base: "column", md: "row" }}
                          alignItems={"start"}
                          gap={"1rem"}
                        >
                          <Tag colorScheme="gray">
                            <TagLeftIcon as={InfoIcon} />
                            <TagLabel>
                              Grades{" "}
                              {item.maximum_grade === item.minimum_grade
                                ? item.minimum_grade === 0
                                  ? "K"
                                  : item.minimum_grade
                                : `${
                                    item.minimum_grade === 0
                                      ? "K"
                                      : item.minimum_grade
                                  } - ${item.maximum_grade}`}
                            </TagLabel>
                          </Tag>
                          <Tag colorScheme="gray">
                            <TagLeftIcon as={InfoIcon} />
                            <TagLabel>
                              {item.minimum_technology} Required
                            </TagLabel>
                          </Tag>
                        </Flex>
                        <PrismicRichText field={item.course_description} />
                      </Stack>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel p={4}>
                      <Box>
                        <PrismicRichText field={item.course_syllabi} />
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Stack>
            </Accordion>
          </GridItem>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
};

export default ForSchoolsAndPartnersCourseListing;
