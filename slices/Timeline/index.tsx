"use client";
import { backgroundColorOptions } from "@/app/components/background_options";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { TextBlock } from "@/app/components/TextBlock";
import { Simplify } from "@/prismicio-types";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardProps,
  Center,
  Container,
  Flex,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
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
      <CardBody>
        <Stack gap={"2.5rem"}>
          <Stack gap={"1.25rem"}>
            <CustomHeading as="h6" color={"primary.500"}>
              {card.date}
            </CustomHeading>
            <CustomHeading as="h4">{card.title}</CustomHeading>
            <Text>{card.description}</Text>
          </Stack>
          {(card.has_link || card.has_button) && (
            <ButtonGroup spacing="1rem">
              {card.has_button && (
                <Button
                  variant="solid"
                  as={PrismicNextLink}
                  field={card.button_link}
                >
                  {card.button_text}
                </Button>
              )}
              {card.has_link && (
                <Button
                  whiteSpace={"wrap"}
                  variant="link"
                  as={PrismicNextLink}
                  field={card.link}
                >
                  {card.link_text}
                </Button>
              )}
            </ButtonGroup>
          )}
        </Stack>
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
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BackgroundColor backgroundColor={slice.primary.background_color}>
        <ContainerWrapper>
          <Flex maxW={"140ch"} justifyContent={"center"}>
            <Stack gap={"2.25rem"}>
              <Container p={0} textAlign={{ md: "center" }}>
                <TextBlock textBlock={slice.primary.heading_text_block} />
              </Container>
              <Box>
                {slice.primary.timeline_cards.map((card, i) => (
                  <Flex key={i}>
                    {isDesktop && i % 2 != 0 && (
                      <>
                        {/* <Flex flex={1} justifyContent={"end"}> */}
                        <MilestoneCard card={card} flex={1} />
                        {/* </Flex> */}
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
                            {i == slice.primary.timeline_cards.length - 1 ? (
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
                            i == slice.primary.timeline_cards.length - 1 ? (
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
                        {/* <Flex flex={1} justifyContent={"start"}> */}
                        <MilestoneCard card={card} flex={1} />
                        {/* </Flex> */}
                      </>
                    )}
                    {isMobile && (
                      <>
                        <Stack pos="relative" gap={0} mr={"1.5rem"}>
                          <Flex justifyContent="center" flex={1}>
                            {i == 0 ||
                            slice.primary.timeline_cards.length == 1 ? (
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
                            {i == slice.primary.timeline_cards.length - 1 ||
                            i == slice.primary.timeline_cards.length - 1 ? (
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
              </Box>
            </Stack>
          </Flex>
        </ContainerWrapper>
      </BackgroundColor>
    </section>
  );
};

export default Timeline;
