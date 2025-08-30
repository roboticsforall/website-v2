"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import TestimonialNoImage from "./TestimonialNoImage";
import TestimonialWithImage from "./TestimonialWithImage";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  switch (slice.variation) {
    case "testimonialWithImage":
      return <TestimonialWithImage slice={slice} />;
    default:
      return <TestimonialNoImage slice={slice} />;
  }
};

export default Testimonials;
