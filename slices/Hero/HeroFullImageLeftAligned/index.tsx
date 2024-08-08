import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";
import { BlurBox } from "@/app/components/BlurBox";
import { Box } from "@chakra-ui/react";

const HeroFullImageLeftAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <Box
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
    </Box>
  );
};

export default HeroFullImageLeftAligned;
