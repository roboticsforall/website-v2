import { Box, Container, Stack } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import CustomCarousel from "@/app/components/CustomCarousel";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TextBlock } from "@/app/components/TextBlock";

/**
 * Props for `IconCarousel`.
 */
export type IconCarouselProps = SliceComponentProps<Content.IconCarouselSlice>;

/**
 * Component for "IconCarousel" Slices.
 */
const IconCarousel = ({ slice }: IconCarouselProps): JSX.Element => {
  const slideData = slice.primary.icons.map((item) => ({
    icon: item.icon.url || "",
  }));

  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Stack gap={"2.5rem"}>
          <Container p={0} textAlign={{ md: "center" }}>
            <TextBlock textBlock={slice.primary.heading_text_block} />
          </Container>
          <CustomCarousel slides={slideData} />
        </Stack>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default IconCarousel;
