"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Box, Flex, Link, Image } from "@chakra-ui/react";


/**
 * Props for `Hanna`.
 */
export type HannaProps = SliceComponentProps<Content.HannaSlice>;

/**
 * Component for "Hanna" Slices.
 */
const Hanna = ({ slice }: HannaProps): JSX.Element => {
  return (
    <div>
       <Flex>
      <Box flex="1">
      <Image
        src={slice.primary.hannaimg.url!}
        alt={slice.primary.hannaimg.alt!}
        width={slice.primary.hannaimg.dimensions?.width}
        height={slice.primary.hannaimg.dimensions?.height}
      />
    </Box>
    <Link href='#'>Click here</Link>
    </Flex>
    </div>
   
  );
};

export default Hanna;
