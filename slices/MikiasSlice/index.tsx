import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `MikiasSlice`.
 */
export type MikiasSliceProps = SliceComponentProps<Content.MikiasSliceSlice>;

/**
 * Component for "MikiasSlice" Slices.
 */
const MikiasSlice = ({ slice }: MikiasSliceProps): JSX.Element => {
  return (
    <Flex 
      direction={["column", "column", "row"]} 
      align="center" 
      p={8} 
      bg="gray.50" 
      borderRadius="lg"
      boxShadow="lg"
      gap={8}
    >
      <Box flex="1" mb={[4, 4, 0]}>
        <Image
          src={slice.primary.image.url!}
          alt={slice.primary.image.alt!}
          layout="responsive"
          width={500}
          height={300}
          objectFit="cover"
          style={{ borderRadius: "8px" }}
        />
      </Box>
      <VStack flex="1" align="start" spacing={4}>
        <Heading as="h1" size="lg" color="teal.600">
          {slice.primary.title}
        </Heading>
        <Box>
          <PrismicRichText field={slice.primary.description} components={{
            paragraph: ({ children }) => (
              <Text fontSize="md" color="gray.700">
                {children}
              </Text>
            ),
          }} />
        </Box>
        <PrismicNextLink field={slice.primary.link}>
          <Button colorScheme="teal" size="md">
            {slice.primary.buttontext}
          </Button>
        </PrismicNextLink>
      </VStack>
    </Flex>
  );
};

export default MikiasSlice;
