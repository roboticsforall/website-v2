"use client";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import {
  ExternalLinkIcon,
  InfoIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  Accordion,
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
  Button,
  Flex,
  Hide,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { Content, createClient } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { IFilterOptionType, IFilterType } from "..";
import { TextBlock } from "@/app/components/TextBlock";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const client = createClient("rfa-cms");

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

const IndividualLearnersCourseListing = ({
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
