"use client";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { InfoIcon } from "@chakra-ui/icons";
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
} from "@chakra-ui/react";
import { Content, createClient } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { IFilterOptionType, IFilterType } from "..";

const client = createClient("rfa-cms");

const filterOptions: IFilterOptionType = {
  subject: {
    filterName: "Subject",
    checkbox: [
      { label: "Programming", value: "Programming" },
      { label: "Scratch", value: "Scratch" },
      { label: "Lego", value: "Lego" },
    ],
  },
  requiredTechnology: {
    filterName: "Minimum Technology Required",
    checkbox: [
      { label: "Computer", value: "Computer" },
      { label: "Mobile", value: "Mobile" },
      { label: "Computer and Mobile", value: "Computer and Mobile" },
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

const ForSchoolsAndPartnersCourseListing = ({
  course_listing,
}: Content.CourseListingSliceDefaultPrimary): JSX.Element => {
  const [data, setData] =
    useState<Content.CourseListingDocument<string> | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState<IFilterType>({
    subject: [],
    requiredTechnology: [],
    grade: -1,
  });
  const [sliderValue, setSliderValue] = useState<number>(-1);

  async function getCourseData() {
    const data = await client.getByUID(
      "course_listing",
      (course_listing as { uid: string }).uid // type assertion bc .uid doesn't seem to exist. Futher research shows .course_listing is of type EmptyLinkDocument bc SliceSimulator doesn't support content relationship yet
    );
    console.log(course_listing);
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
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (Array.isArray(updatedFilters[section])) {
        updatedFilters[section] = [];
      } else if (typeof updatedFilters[section] === "number") {
        updatedFilters[section] = -1; // Or set to a default value of your choice
        if (section === "grade") {
          setSliderValue(0); // Reset slider value to 0
        }
      }
      return updatedFilters;
    });
  }, []);

  const handleSliderChanged = useCallback((value: number) => {
    setSliderValue(value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      grade: value,
    }));
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.data.courses.filter((course) => {
      const grade = filters.grade as number;
      const subject = filters.subject as string[];
      const technology = filters.requiredTechnology as string[];

      const gradeFilter =
        grade == null ||
        grade == -1 ||
        (grade >= course.minimum_grade! && grade <= course.maximum_grade!);

      const subjectFilter = !subject.length || subject.includes(course.subject);

      const technologyFilter =
        !technology.length || technology.includes(course.minimum_technology!);

      return gradeFilter && subjectFilter && technologyFilter;
    });
  }, [data, filters]);

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
                          0
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
                          {sliderValue == -1 ? 0 : sliderValue}
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
          <Accordion allowMultiple>
            <Stack mb={"1.25rem"}>
              {filteredData.map((item, i) => (
                <AccordionItem key={item.course_name} borderWidth={1}>
                  <AccordionButton p={0}>
                    <Box py={4}>
                      <PrismicNextImage
                        width={"150"}
                        height={"150"}
                        field={item.image}
                      />
                    </Box>
                    <Stack gap={"1rem"} py={3} flex={1} textAlign={"start"}>
                      <CustomHeading as="h4">{item.course_name}</CustomHeading>
                      <HStack spacing={"1rem"}>
                        <Tag>
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
                        <Tag>
                          <TagLeftIcon as={InfoIcon} />
                          <TagLabel>
                            {item.minimum_technology} Required
                          </TagLabel>
                        </Tag>
                      </HStack>
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
    </ContainerWrapper>
  );
};

export default ForSchoolsAndPartnersCourseListing;
