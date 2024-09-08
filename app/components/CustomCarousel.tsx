"use client";

import React from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface SlideData {
  icon: string;
}

interface ImageSliderProps {
  slides: SlideData[];
}

const CustomCarousel: React.FC<ImageSliderProps> = ({ slides }) => {
  // custom responsive settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Box position="relative" width="full" overflow="hidden">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000} // Adjust speed for better smoothness
        infinite
        customLeftArrow={
          <IconButton
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon w={8} h={8} />}
            position="absolute"
            colorScheme="white"
            color="black"
            borderRadius={"50%"}
            bg="white"
            border="1px solid grey"
          />
        }
        customRightArrow={
          <IconButton
            aria-label="Previous Slide"
            icon={<ChevronRightIcon w={8} h={8} />}
            position="absolute"
            right={0}
            colorScheme="white"
            color="black"
            borderRadius={"50%"}
            bg="white"
            border="1px solid grey"
          />
        }
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            p={"1.5rem"}
            boxSizing="border-box"
            height="300px"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image
              src={slide.icon}
              alt={`Slide ${index}`}
              width="100%"
              borderRadius="md"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
