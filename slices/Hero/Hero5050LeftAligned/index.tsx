"use client";
import { Content } from "@prismicio/client";
import { Stack, SimpleGrid, Box, Flex } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const Hero5050LeftAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "hero5050LeftAligned"
          ? slice.primary.background_color
          : "white"
      }
    >
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Flex alignItems="center">
          {slice.variation === "hero5050LeftAligned" && (
            <PrismicNextImage field={slice.primary.image} />
          )}
        </Flex>

        <Stack justifyContent={"center"}>
          <ContainerWrapper>
            <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
              <TextBlockBottomButtonGroup
                textBlock={slice.primary.hero_text_block}
                button_group={slice.primary.button_group}
              />
            </BlurBox>
          </ContainerWrapper>
        </Stack>
      </SimpleGrid>
    </BackgroundColor>
  );
};

export default Hero5050LeftAligned;
