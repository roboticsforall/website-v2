import { Box, Flex, Text } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeColumnExplainer`.
 */
export type ThreeColumnExplainerProps =
  SliceComponentProps<Content.ThreeColumnExplainerSlice>;

/**
 * Component for "ThreeColumnExplainer" Slices.
 */
const ThreeColumnExplainer = ({
  slice,
}: ThreeColumnExplainerProps): JSX.Element => {
  return (
    <Flex direction="row" py="8" color="black" mt="20" px="10" height="271px" align="start" gap="5">
      <Box w="376px" p="6" py="0">
        <Text fontSize="28px" lineHeight="36px" fontWeight="700" mb="2">
          {slice.primary.title}
        </Text>
        <PrismicRichText field={slice.primary.description} />
      </Box>
      {slice.primary.multi_column_explainer.map((item, i) => (
        <Box
          key={i}
          w="350px"
          h="185px"
          p="6"
          color="white"
          display="flex"
          flexDirection="column"
          justifyContent="start"
          alignItems="flex-start"
          bg="#3399FF"
          borderRadius="8px"
        >
          <Text
            fontSize="24px"
            fontWeight="700"
            lineHeight="28px"
            textAlign="left"
            color="white"
            mb="2"
          >
            {item.title}
          </Text>
          <PrismicRichText field={item.description} />
        </Box>
      ))}
    </Flex>
  );
};

export default ThreeColumnExplainer;
