import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SplitFeatureBlock`.
 */
export type SplitFeatureBlockProps =
  SliceComponentProps<Content.SplitFeatureBlockSlice>;

/**
 * Component for "SplitFeatureBlock" Slices.
 */
const TwoColumn = (slice: Content.SplitFeatureBlockSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "default" ? slice.primary.backgroundcolor : "secondary"
      }
    >
      <ContainerWrapper >
        <Flex
          gap="1.5rem"
          wrap="wrap"
          justifyContent="left"
          py="8"
          flexDirection={{ base: "column", md: "row" }}
        >
          {slice.primary.split_feature_block.map((item, index) => (
            <Box
              key={index}
              width={{ md: "calc(50% - 1.5rem)" }}
              textAlign="left"
            >
              <Heading as="h1" size="3xl" mb={"1.25rem"}>
                {item.title}
              </Heading>
              <Text as="b" fontSize="lg">{item.description}</Text>
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TwoColumn;
