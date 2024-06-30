"use client";
import { Heading } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeColumnCards`.
 */
export type ThreeColumnCardsProps =
  SliceComponentProps<Content.ThreeColumnCardsSlice>;

/**
 * Component for "ThreeColumnCards" Slices.
 */
const ThreeColumnCards = ({ slice }: ThreeColumnCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h1" size="4xl" noOfLines={1}>
        (4xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="3xl" noOfLines={1}>
        (3xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="2xl">
        (2xl) In love with React & Next
      </Heading>
      <Heading as="h2" size="xl">
        (xl) In love with React & Next
      </Heading>
      <Heading as="h3" size="lg">
        (lg) In love with React & Next
      </Heading>
      <Heading as="h4" size="md">
        (md) In love with React & Next
      </Heading>
      <Heading as="h5" size="sm">
        (sm) In love with React & Next
      </Heading>
      <Heading as="h6" size="xs">
        (xs) In love with React & Next
      </Heading>
      <PrismicNextLink field={slice.primary.button}>
        This is a link
      </PrismicNextLink>
    </section>
  );
};

export default ThreeColumnCards;
