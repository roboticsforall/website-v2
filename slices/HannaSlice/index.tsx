"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Box, Flex, VStack, Heading, Button } from "@chakra-ui/react";
import Image from "next/image";
import { PrismicNextLink } from "@prismicio/next";


/**
 * Props for `Hanna`.
 */
export type HannaProps = SliceComponentProps<Content.HannaSlice>;

/**
 * Component for "Hanna" Slices.
 */
const Hanna = ({ slice }: HannaProps): JSX.Element => {
  return (
    <Flex
    direction={["column"]} 
      align="center" 
      p={8} 
      bg="gray.50" 
      borderRadius="lg"
      boxShadow="lg"
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
      <Box flex="1" mb={[4, 4, 0]}>
        <PrismicNextLink field={slice.primary.link}>
          <Button>
          {slice.primary.title}
          </Button>
      </PrismicNextLink>
      </Box>
      
      
    </Flex>
   
  );
};

export default Hanna;
