"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { TextBlock } from "@/app/components/TextBlock";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FaqSlice`.
 */
export type FaqSliceProps = SliceComponentProps<Content.FaqSliceSlice>;

/**
 * Component for "FaqSlice" Slices.
 */
const FaqSlice = ({ slice }: FaqSliceProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Stack gap={"2.5rem"}>
          <Container p={0} textAlign={{ md: "center" }}>
            <TextBlock textBlock={slice.primary.heading_text_block} />
          </Container>
          <Container p={0}>
            <Accordion allowMultiple>
              {slice.primary.accordion.map((item, index) => (
                <AccordionItem key={index}>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <CustomHeading as="h4">{item.heading}</CustomHeading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>{item.description}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Container>
        </Stack>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default FaqSlice;
