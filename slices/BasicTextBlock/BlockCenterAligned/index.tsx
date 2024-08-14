"use client";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { Center } from "@chakra-ui/react";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";

const BlockCenterAligned = (
  slice: Content.BasicTextBlockSlice
): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Center>
          <TextBlockBottomButtonGroup
            textBlock={slice.primary.text_block}
            button_group={slice.primary.button_group}
            textAlign="center"
            justifyContent="center"
          />
        </Center>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default BlockCenterAligned;
