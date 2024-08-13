"use client";
import { CustomHeading } from "@/app/components/CustomHeading";
import { CourseListDocument } from "@/prismicio-types";
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
import { Content, createClient, PrismicDocument } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useEffect, useState } from "react";

const client = createClient("rfa-cms");

/**
 * Props for `CourseList`.
 */
export type CourseListProps = SliceComponentProps<Content.CourseListSlice>;

/**
 * Component for "CourseList" Slices.
 */
const CourseList = ({ slice }: CourseListProps): JSX.Element => {
  const [data, setData] = useState<CourseListDocument<string> | null>(null);
  const [isLoading, setLoading] = useState(true);

  async function getCourseData() {
    const data = await client.getByUID(
      "course_list",
      slice.primary.course_list.uid
    );
    console.log(data);
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getCourseData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Accordion>
        {data.data.courses.map((item, i) => (
          <AccordionItem key={i} mb={10}>
            <AccordionButton gap={5} p={0}>
              <Box flex={1}>
                <PrismicNextImage field={item.course_image} />
              </Box>
              <Stack gap={"1rem"} flex={2} textAlign={"start"}>
                <Box>
                  {item.open_for_enrollment ? (
                    <Tag colorScheme="green">
                      <TagLeftIcon as={StarIcon} />
                      <TagLabel>Open for Enrollment!</TagLabel>
                    </Tag>
                  ) : (
                    <Tag colorScheme="yellow">
                      <TagLeftIcon as={InfoIcon} />
                      <TagLabel>Waitlist Available</TagLabel>
                    </Tag>
                  )}
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
                <PrismicRichText field={item.course_description} />
              </Stack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <PrismicRichText field={item.course_syllabi} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default CourseList;
