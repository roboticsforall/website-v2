import { Box, Flex, Text } from "@chakra-ui/react";
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
const SplitFeatureBlock = ({ slice }: SplitFeatureBlockProps): JSX.Element => {
  return (
    <Flex direction="row" py="8" color="black" mt="20" px="10" bg="#178BFF" height="271px" align="center">
      {slice.primary.split_feature_block.map((item, i) => (
        <Box key={i} w="383.33px" h="131px" p="6" color="white" alignItems="left">
          <Text
            fontSize="62px"
            fontWeight="700"
            lineHeight="72px"
            textAlign="left"
            color="white"
            mb="2"
          >
            {item.title}
          </Text>
          <Text
            fontSize="18px"
            fontWeight="400"
            lineHeight="20px"
            textAlign="left"
            color="white"
            marginTop="10px"
          >
            {item.description}
          </Text>
        </Box>
      ))}
    </Flex>
  );
};

export default SplitFeatureBlock;
