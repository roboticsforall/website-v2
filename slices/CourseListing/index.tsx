"use client";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { CloseIcon, InfoIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
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
  SliderMark,
  Grid,
  GridItem,
  CloseButton,
  Skeleton,
} from "@chakra-ui/react";
import { Content, createClient } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect, useState, useMemo, useCallback } from "react";

const client = createClient("rfa-cms");

export type CourseListingProps =
  SliceComponentProps<Content.CourseListingSlice>;

interface IFilterOptionType {
  [filterName: string]: {
    filterName: string;
    checkbox?: { label: string; value: string }[];
    slider?: {
      label: string;
      min: number;
      max: number;
      step: number;
      defaultValue: number;
    };
  };
}

interface IFilterType {
  [filterName: string]: string[] | number | null;
}

const filterOptions: IFilterOptionType = {
  enrollmentStatus: {
    filterName: "Enrollment Status",
    checkbox: [
      { label: "Open For Enrollment", value: "true" },
      { label: "Waitlist Available", value: "false" },
    ],
  },
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

const CourseList = ({ slice }: CourseListingProps): JSX.Element => {
  const [data, setData] =
    useState<Content.CourseListingDocument<string> | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [filters, setFilters] = useState<IFilterType>({
    enrollmentStatus: [],
    subject: [],
    requiredTechnology: [],
    grade: -1,
  });

  async function getCourseData() {
    const data = await client.getByUID(
      "course_listing",
      slice.primary.course_listing.uid
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
      } else if (typeof updatedFilters[section] == "number") {
        updatedFilters[section] = -1;
      }
      return updatedFilters;
    });
  }, []);

  const handleSliderChanged = useCallback((value: number) => {
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
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContainerWrapper>
        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="1.5rem">
          <GridItem>
            <Stack py={2}>
              {Object.keys(filterOptions).map((section) => (
                <Box key={section}>
                  <HStack spacing={1}>
                    <Text fontWeight="bold">
                      {filterOptions[section].filterName}
                    </Text>
                    <CloseButton
                      aria-label={`Clear ${section} Filter`}
                      onClick={() => clearFilter(section)}
                    />
                  </HStack>
                  {filterOptions[section].checkbox &&
                    filterOptions[section].checkbox.map((checkboxInfo) => (
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
                  {filterOptions[section].slider && (
                    <Slider
                      aria-label={filterOptions[section].slider.label}
                      onChange={handleSliderChanged}
                      min={filterOptions[section].slider.min}
                      max={filterOptions[section].slider.max}
                      step={filterOptions[section].slider.step}
                      defaultValue={filterOptions[section].slider.defaultValue}
                      value={(filters.grade as number) || 0}
                    >
                      <SliderTrack>
                        <SliderFilledTrack bg="yellow.yellow3" />
                      </SliderTrack>
                      <SliderThumb boxSize={6} />
                      {Array.from(
                        { length: filterOptions[section].slider.max + 1 },
                        (_, i) => (
                          <SliderMark key={i} value={i} mt="1" fontSize="sm">
                            {i}
                          </SliderMark>
                        )
                      )}
                    </Slider>
                  )}
                </Box>
              ))}
            </Stack>
          </GridItem>
          <GridItem>
            <Accordion allowMultiple>
              <Stack mb={"1.25rem"}>
                {filteredData.map((item, i) => (
                  <AccordionItem key={item.course_name} borderWidth={1}>
                    <AccordionButton p={0}>
                      <Box>
                        <PrismicNextImage
                          width={"150"}
                          height={"150"}
                          field={item.image}
                        />
                      </Box>
                      <Stack gap={"1rem"} py={3} flex={1} textAlign={"start"}>
                        <Box>
                          {item.open_for_enrollment ? (
                            <Tag colorScheme="green">
                              <TagLeftIcon as={StarIcon} />
                              <TagLabel>Open for Enrollment!</TagLabel>
                            </Tag>
                          ) : (
                            <Tag colorScheme="yellow">
                              <TagLeftIcon as={WarningIcon} />
                              <TagLabel>Waitlist Available</TagLabel>
                            </Tag>
                          )}
                        </Box>
                        <CustomHeading as="h4">
                          {item.course_name}
                        </CustomHeading>
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
    </section>
  );
};

export default CourseList;
