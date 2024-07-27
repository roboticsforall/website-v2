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
const MultiColumn = (slice: Content.SplitFeatureBlockSlice): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Flex
          gap={{ base: "4rem", md: "1.5rem" }}
          wrap="wrap"
          textAlign={"center"}
          justifyContent="space-around"
          flexDirection={{ base: "column", md: "row" }}
        >
          {slice.primary.split_feature_block.map((item, index) => (
            <Box key={index}>
              <Heading as="h1" size="3xl" mb={"1.25rem"}>
                {item.title}
              </Heading>
              <Text as="b" fontSize="lg">
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default MultiColumn;
