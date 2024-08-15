import { Box, Container } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import CustomCarousel from "@/app/components/CustomCarousel";

/**
 * Props for `IconCarousel`.
 */
export type IconCarouselProps = SliceComponentProps<Content.IconCarouselSlice>;

/**
 * Component for "IconCarousel" Slices.
 */
const IconCarousel = ({ slice }: IconCarouselProps): JSX.Element => {

  const slideData = slice.primary.icons.map((item) => ({
    icon: item.icon.url || ""
  }));

  return (
    <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
      <CustomCarousel slides={slideData} />   
    </Container>
  );
};

export default IconCarousel;
