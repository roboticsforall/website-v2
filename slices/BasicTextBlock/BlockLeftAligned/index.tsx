"use client";
import { Box, Button, Text, Flex } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const BlockLeftAligned = (slice: Content.BasicTextBlockSlice): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <TextBlockBottomButtonGroup
          textBlock={slice.primary.text_block}
          button_group={slice.primary.button_group}
        />
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default BlockLeftAligned;
