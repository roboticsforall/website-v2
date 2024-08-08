import { asText, Content } from "@prismicio/client";
import { Stack, SimpleGrid, Box, Grid, GridItem } from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";
import { BlurBox } from "@/app/components/BlurBox";

const HeroFullImageLeftAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "hero5050LeftAligned"
          ? slice.primary.background_color
          : "white"
      }
      bgImage={
        slice.variation == "default"
          ? `url(${slice.primary.background_image.url})`
          : ""
      } // Assuming background_image has a .src property
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover" // Adjust to cover the container
    >
      <ContainerWrapper>
        <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
          <TopHeadingGroup
            heading={slice.primary.hero_header}
            subheading={slice.primary.hero_description}
          />
          <BottomButtonGroup button_group={slice.primary.button_group} />
        </BlurBox>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default HeroFullImageLeftAligned;
