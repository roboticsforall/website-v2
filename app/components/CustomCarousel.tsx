"use client";

import React from 'react';
import { Box, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
        infinite
        customLeftArrow={
          <IconButton
            aria-label="Previous Slide"
            icon={<ChevronLeftIcon />}
            position="absolute"
            left={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="white"
            color="black"
            _hover={{ bg: "rgba(255, 255, 255, 0.5)", color: "black" }}
            border="1px solid grey"
          />
        }
        customRightArrow={
          <IconButton
            aria-label="Next Slide"
            icon={<ChevronRightIcon />}
            position="absolute"
            right={0}
            top="50%"
            transform="translateY(-50%)"
            zIndex={2}
            bg="white"
            color="black"
            _hover={{ bg: "rgba(255, 255, 255, 0.5)", color: "black" }}
            border="1px solid grey"
          />
        }
      >
        {slides.map((slide, index) => (
          <Box
            key={index}
            p={12}
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
              height="100%"
              objectFit="cover"
              borderRadius="md"
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default CustomCarousel;
