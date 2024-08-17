"use client";
import { backgroundColorOptions } from "@/app/components/background_options";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { Simplify } from "@/prismicio-types";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CardProps,
  Center,
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

interface MilestoneCardProps extends CardProps {
  card: Simplify<Content.TimelineSliceDefaultPrimaryTimelineCardsItem>;
}

// MilestoneCard component
const MilestoneCard: React.FC<MilestoneCardProps> = ({
  card,
  ...cardProps
}) => {
  return (
    <Card {...cardProps}>
      <Text color={"primary.500"}>{card.date}</Text>
      <CustomHeading as="h4">{card.title}</CustomHeading>
      <CardBody>
        <Text>{card.description}</Text>
      </CardBody>
    </Card>
  );
};

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
    {
      id: 4,
      date: "July 30, 2018",
      title: "Freelancing, started working for myself",
      description:
        "Ahmad starts his own business consulting for companies as a fullstack developer. Clients include UK Government departments, UK banks, global fintechs and startups.",
    },
    {
      id: 5,
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
        {slice.primary.timeline_cards.map((card, i) => (
          <Flex key={i}>
            {isDesktop && i % 2 != 0 && (
              <>
                <MilestoneCard card={card} flex={1} />
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
                    {i == milestones.length - 1 ? (
                      <Box height="100%"></Box>
                    ) : (
                      <Box
                        height="100%"
                        borderWidth={1}
                        borderColor={backgroundColorOptions.SECONDARY}
                      ></Box>
                    )}
                  </Flex>
                </Stack>
                <Box flex={1}></Box>
              </>
            )}
            {isDesktop && i % 2 == 0 && (
              <>
                <Box flex={1}></Box>
                <Stack pos="relative" gap={0} mx={"1.5rem"}>
                  <Flex justifyContent="center" flex={1}>
                    {i == 0 ? (
                      <Box height="100%"></Box>
                    ) : (
                      <Box
                        height="100%"
                        borderWidth={1}
                        borderColor={backgroundColorOptions.SECONDARY}
                      ></Box>
                    )}
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
                    {slice.primary.timeline_cards.length == 1 ||
                    i == milestones.length - 1 ? (
                      <Box height="100%"></Box>
                    ) : (
                      <Box
                        height="100%"
                        borderWidth={1}
                        borderColor={backgroundColorOptions.SECONDARY}
                      ></Box>
                    )}
                  </Flex>
                </Stack>
                <MilestoneCard card={card} flex={1} />
              </>
            )}
            {isMobile && (
              <>
                <Stack pos="relative" gap={0} mr={"1.5rem"}>
                  <Flex justifyContent="center" flex={1}>
                    {i == 0 || slice.primary.timeline_cards.length == 1 ? (
                      <Box height="100%"></Box>
                    ) : (
                      <Box
                        height="100%"
                        borderWidth={1}
                        borderColor={backgroundColorOptions.SECONDARY}
                      ></Box>
                    )}
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
                    {i == milestones.length - 1 ? (
                      <Box height="100%"></Box>
                    ) : (
                      <Box
                        height="100%"
                        borderWidth={1}
                        borderColor={backgroundColorOptions.SECONDARY}
                      ></Box>
                    )}
                  </Flex>
                </Stack>
                <MilestoneCard card={card} flex={1} my={"1rem"} />
              </>
            )}
          </Flex>
        ))}
      </ContainerWrapper>
    </section>
  );
};

export default Timeline;
