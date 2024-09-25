"use client";

import {
  Box,
  Button,
  IconButton,
  HStack,
  Text,
  Center,
  Flex,
  ButtonGroup,
  Stack,
  Avatar,
  Divider,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import styles from "../background.module.css";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Component for "Testimonials" Slices.
 */
const TestimonialWithImage = (
  slice: Content.TestimonialsSlice
): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slice.primary.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slice.primary.testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Box className={styles.backgroundImage}>
        <ContainerWrapper overflow={"hidden"}>
          <CustomHeading as="h2" mb={"2.5rem"}>
            {slice.primary.title}
          </CustomHeading>
          <Flex
            gap={"1.5rem"}
            transition="transform 0.3s ease-in-out"
            transform={`translateX(calc(-1 * (${currentIndex * 100}% + ${currentIndex * 1.5}rem)))`}
          >
            {slice.primary.testimonials.map((item, index) => (
              <Box key={index} minWidth="100%">
                <Center>
                  <Box
                    bg="white"
                    borderRadius={"md"}
                    padding="1.25rem"
                    width={{
                      base: "100%",
                      md: "70%",
                    }}
                  >
                    <Stack gap="1.25rem">
                      <Divider borderWidth={1} />
                      <Text fontSize="xl" fontStyle={"italic"}>
                        &quot;{item.description}&quot;
                      </Text>
                      <Divider borderWidth={1} />

                      <Flex gap="1.5rem">
                        {slice.variation == "testimonialWithImage" &&
                        "image" in item ? (
                          <Box
                            borderRadius={"50%"}
                            as={PrismicNextImage}
                            width="100px"
                            height="100px"
                            objectFit={"cover"}
                            field={item.image}
                          />
                        ) : (
                          <></>
                        )}

                        <Box>
                          <Text fontSize="lg" fontWeight={"bold"} py="1.25rem">
                            {item.name}
                          </Text>
                          <Text>{item.user}</Text>
                        </Box>
                      </Flex>
                    </Stack>
                  </Box>
                </Center>
              </Box>
            ))}
          </Flex>

          {slice.primary.testimonials.length == 1 ? (
            <></>
          ) : (
            <>
              <Center pt="2.25rem">
                <Flex
                  width={{
                    base: "100%",
                    md: "70%",
                  }}
                  justifyContent={"end"}
                >
                  <ButtonGroup spacing="1.25rem">
                    <IconButton
                      aria-label="left-arrow"
                      borderRadius={"50%"}
                      onClick={prevSlide}
                    >
                      <ArrowBackIcon />
                    </IconButton>

                    <IconButton
                      aria-label="right-arrow"
                      onClick={nextSlide}
                      borderRadius={"50%"}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </ButtonGroup>
                </Flex>
              </Center>
              <HStack justify="center" alignItems="center" mt={4} spacing={2}>
                {slice.primary.testimonials.map((_, index) => (
                  <Button
                    key={index}
                    size="xs"
                    onClick={() => goToSlide(index)}
                    bg={index === currentIndex ? "primary.500" : "gray.300"}
                    borderRadius="full"
                    _hover={{
                      bg: index === currentIndex ? "primary.500" : "gray.400",
                    }}
                  />
                ))}
              </HStack>
            </>
          )}
        </ContainerWrapper>
      </Box>
    </section>
  );
};

export default TestimonialWithImage;
