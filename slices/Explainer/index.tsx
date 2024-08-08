import { Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "../../app/components/CustomHeading";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";

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
            <TopHeadingGroup
              flex={2}
              heading={slice.primary.explainer_title}
              subheading={slice.primary.explainer_description}
            />
          </Flex>
        </ContainerWrapper>
      </BackgroundColor>
    </section>
  );
};

export default Explainer;
