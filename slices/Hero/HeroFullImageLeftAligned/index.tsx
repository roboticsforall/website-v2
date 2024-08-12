"use client";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";
import { Box } from "@chakra-ui/react";

const HeroFullImageLeftAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <Box
      bgImage={
        slice.variation == "default"
          ? `${slice.primary.background_image.url}`
          : "none"
      } // Assuming background_image has a .src property
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover" // Adjust to cover the container
    >
      <ContainerWrapper>
        <BlurBox
          maxWidth="70ch"
          hasBlur={slice.primary.has_header_white_highlight}
        >
          <TextBlockBottomButtonGroup
            textBlock={slice.primary.hero_text_block}
            button_group={slice.primary.button_group}
          />
        </BlurBox>
      </ContainerWrapper>
    </Box>
  );
};

export default HeroFullImageLeftAligned;
