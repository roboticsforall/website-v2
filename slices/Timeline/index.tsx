"use client";
import { backgroundColorOptions } from "@/app/components/background_options";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import {
  Box,
  Card,
  CardBody,
  Center,
  Divider,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Timeline`.
 */
export type TimelineProps = SliceComponentProps<Content.TimelineSlice>;

/**
 * Component for "Timeline" Slices.
 */
const Timeline = ({ slice }: TimelineProps): JSX.Element => {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const isMobile = useBreakpointValue({ base: true, md: false });
  const milestones = [
    {
      id: 1,
      date: "MARCH 30, 2022",
      title: "Chakra Hackathon",
      description: `Winner of first ever ChakraUI Hackathon. On sait depuis longtemps que travailler avec du texte lisible et contenant du sens.`,
    },
    {
      id: 2,
      date: "July 30, 2021",
      title: "Open Source, first contribution",
      description: `Fixing a typo, to fix a bug, contributing to Open Source and collaborating to improve technology for everyone, Ahmad's world changed again!.`,
    },
    {
      id: 3,
      date: "July 30, 2018",
      title: "Freelancing, started working for myself",
      description:
        "Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.",
    },
  ];
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ContainerWrapper>
        {milestones.map((milestone, i) => (
          <Flex key={milestone.id}>
            {isDesktop && i % 2 == 0 && (
              <>
                <Card flex={1}>
                  <CardBody>
                    <Text>
                      View a summary of all your customers over the last month.
                    </Text>
                  </CardBody>
                </Card>
                <Stack pos="relative" gap={0} mx={"1.5rem"}>
                  <Flex justifyContent="center" flex={1}>
                    <Box
                      height="100%"
                      borderWidth={1}
                      borderColor={backgroundColorOptions.SECONDARY}
                    ></Box>
                  </Flex>
                  <Center
                    width="1.25rem"
                    height="1.25rem"
                    borderRadius={"50%"}
                    borderWidth={2}
                    borderColor={backgroundColorOptions.SECONDARY}
                  >
                    <Box
                      width="0.75rem"
                      height="0.75rem"
                      borderRadius={"50%"}
                      bg={backgroundColorOptions.SECONDARY}
                    ></Box>
                  </Center>
                  <Flex justifyContent="center" flex={1}>
                    <Box
                      height="100%"
                      borderWidth={1}
                      borderColor={backgroundColorOptions.SECONDARY}
                    ></Box>
                  </Flex>
                </Stack>
                <Box flex={1}></Box>
              </>
            )}
            {isDesktop && i % 2 != 0 && (
              <>
                <Box flex={1}></Box>
                <Box pos="relative" mx="1.5rem">
                  {/* <Box flex={1}></Box> */}
                  <Box
                    pos="absolute"
                    left="50%"
                    transform={"translate(-50%, 0)"}
                    height="calc(50% - 0.625rem)"
                    border="1px solid black"
                  ></Box>
                  <Box
                    pos="absolute"
                    top="50%"
                    left="50%"
                    transform={"translate(-50%, -50%)"}
                    border="1px solid black"
                    width="1.25rem"
                    height="1.25rem"
                    borderRadius={"50%"}
                  >
                    <Box
                      pos="absolute"
                      border="1px solid black"
                      top="50%"
                      left="50%"
                      transform={"translate(-50%, -50%)"}
                      width="0.75rem"
                      height="0.75rem"
                      borderRadius={"50%"}
                      bg="black"
                    ></Box>
                  </Box>
                  <Box
                    pos="absolute"
                    bottom="0"
                    left="50%"
                    transform={"translate(-50%, 0)"}
                    height="calc(50% - 0.625rem)"
                    border="1px solid black"
                  ></Box>
                </Box>
                <Card flex={1}>
                  <CardBody>
                    <Text>
                      View a summary of all your customers over the last month.
                    </Text>
                  </CardBody>
                </Card>
              </>
            )}
            {isMobile && (
              <>
                <Center pos="relative" mr="1.5rem">
                  <Box height="100%" border="1px solid black"></Box>
                  <Box
                    pos="absolute"
                    width="1.25rem"
                    height="1.25rem"
                    borderRadius={"50%"}
                    bg="black"
                  ></Box>
                </Center>
                <Card flex={1}>
                  <CardBody>
                    <Text>
                      View a summary of all your customers over the last month.
                    </Text>
                  </CardBody>
                </Card>
              </>
            )}
          </Flex>
        ))}
      </ContainerWrapper>
    </section>
  );
};

export default Timeline;
