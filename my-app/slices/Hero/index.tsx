"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Flex>
      <Box flex="1">
        <Image
          src={slice.primary.image.url!}
          alt={slice.primary.image.alt!}
          width={slice.primary.image.dimensions?.width}
          height={slice.primary.image.dimensions?.height}
        />
      </Box>
      <Box flex="1">
        <h1>{slice.primary.hero_text}</h1>
      </Box>
    </Flex>
  );
};

export default Hero;
