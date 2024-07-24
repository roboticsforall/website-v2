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
          justifyContent="center"
          py="8"
          flexDirection={{ base: "column", md: "row" }}
          color={"white"}
        >
          {slice.primary.split_feature_block.map((item, index) => (
            <Box
              key={index}
              width={{ md: "calc(50% - 1.5rem)" }}
            >
              <Flex
                direction="column"
                justify="space-between"
                h="100%"
                gap={"1.25rem"}
                p="6"
                align={"center"}
                textAlign="center"
              >
                <Heading as="h1" size="3xl">
                  {item.title}
                </Heading>
                <Text as="b" fontSize="lg">{item.description}</Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TwoColumn;
