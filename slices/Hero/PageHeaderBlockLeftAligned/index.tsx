"use client";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";
import { Box, Container } from "@chakra-ui/react";

const PageHeaderBlockLeftAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "hero5050RightAligned"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
          <TextBlockBottomButtonGroup
            textBlock={slice.primary.hero_text_block}
            button_group={slice.primary.button_group}
          />
        </BlurBox>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default PageHeaderBlockLeftAligned;
