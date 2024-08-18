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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <TestimonialNoImage {...slice} />}
      {slice.variation === "testimonialWithImage" && (
        <TestimonialWithImage {...slice} />
      )}
    </section>
  );
};

export default Testimonials;
