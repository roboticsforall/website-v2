"use client";
import { Content, createClient } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

const IndividualLearnersCourseListing = dynamic(
  () => import("./IndividualLearnersCourseListing")
);
const ForSchoolsAndPartnersCourseListing = dynamic(
  () => import("./ForSchoolsAndPartnersCourseListing")
);

export type CourseListingProps =
  SliceComponentProps<Content.CourseListingSlice>;

export interface IFilterOptionType {
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

export interface IFilterType {
  [filterName: string]: string[] | number | null;
}

const CourseList = ({ slice }: CourseListingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation == "schoolsAndPartners" && (
        <ForSchoolsAndPartnersCourseListing
          heading_text_block={slice.primary.heading_text_block}
          course_listing={slice.primary.course_listing}
        />
      )}
      {slice.variation == "default" && (
        <IndividualLearnersCourseListing
          heading_text_block={slice.primary.heading_text_block}
          course_listing={slice.primary.course_listing}
        />
      )}
    </section>
  );
};

export default CourseList;
