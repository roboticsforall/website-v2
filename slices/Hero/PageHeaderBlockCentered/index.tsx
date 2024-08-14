"use client";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";
import { Center, Container } from "@chakra-ui/react";

export const PageHeaderBlockCentered = (
  slice: Content.HeroSlice
): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.background_color}>
      <ContainerWrapper>
        <Center>
          <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
            <TextBlockBottomButtonGroup
              textAlign="center"
              justifyContent="center"
              textBlock={slice.primary.hero_text_block}
              button_group={slice.primary.button_group}
            />
          </BlurBox>
        </Center>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default PageHeaderBlockCentered;
