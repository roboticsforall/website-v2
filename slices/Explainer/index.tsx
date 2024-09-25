"use client";
import { Flex, Center, Text, Container } from "@chakra-ui/react";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "../../app/components/CustomHeading";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { TextBlock } from "@/app/components/TextBlock";

/**
 * Props for `Explainer`.
 */
export type ExplainerProps = SliceComponentProps<Content.ExplainerSlice>;

/**
 * Component for "Explainer" Slices.
 */
const Explainer = ({ slice }: ExplainerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
        <ContainerWrapper>
          <Flex
            gap="1.5rem"
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <Center flex={1}>
              <CustomHeading as="h2" position={"absolute"}>
                {slice.primary.title}
              </CustomHeading>
              <PrismicNextImage field={slice.primary.image} />
            </Center>
            <Text fontSize="lg" flex={2}>
              {slice.primary.description}
            </Text>
          </Flex>
        </ContainerWrapper>
      </BackgroundColor>
    </section>
  );
};

export default Explainer;
