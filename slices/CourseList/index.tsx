"use client";
import { CustomHeading } from "@/app/components/CustomHeading";
import { InfoIcon, StarIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CourseList`.
 */
export type CourseListProps = SliceComponentProps<Content.CourseListSlice>;

/**
 * Component for "CourseList" Slices.
 */
const CourseList = ({ slice }: CourseListProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Accordion>
        <AccordionItem mb={10}>
          <AccordionButton gap={5} p={0}>
            <Box flex={1}>
              <PrismicNextImage field={slice.primary.image} />
            </Box>
            <Stack gap={"1rem"} flex={2} textAlign={"start"}>
              <Box>
                <Tag colorScheme="green">
                  <TagLeftIcon as={StarIcon} />
                  <TagLabel>Open for Enrollment!</TagLabel>
                </Tag>
              </Box>
              <CustomHeading as="h4">Python</CustomHeading>
              <HStack spacing={"1rem"}>
                <Tag>
                  <TagLeftIcon as={InfoIcon} />
                  <TagLabel>3rd - 4th</TagLabel>
                </Tag>
                <Tag>
                  <TagLeftIcon as={StarIcon} />
                  <TagLabel>Computer and Laptop Required</TagLabel>
                </Tag>
              </HStack>
              <PrismicRichText field={slice.primary.text} />
            </Stack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mb={10}>
          <AccordionButton gap={5} p={0}>
            <Box flex={1}>
              <PrismicNextImage field={slice.primary.image} />
            </Box>
            <Stack gap={"1rem"} flex={2} textAlign={"start"}>
              <Box>
                <Tag colorScheme="green">
                  <TagLeftIcon as={StarIcon} />
                  <TagLabel>Open for Enrollment!</TagLabel>
                </Tag>
              </Box>
              <CustomHeading as="h4">Python</CustomHeading>
              <HStack spacing={"1rem"}>
                <Tag>
                  <TagLeftIcon as={InfoIcon} />
                  <TagLabel>3rd - 4th</TagLabel>
                </Tag>
                <Tag>
                  <TagLeftIcon as={StarIcon} />
                  <TagLabel>Computer and Laptop Required</TagLabel>
                </Tag>
              </HStack>
              <PrismicRichText field={slice.primary.text} />
            </Stack>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default CourseList;
