"use client";
import { Content } from "@prismicio/client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const Hero5050RightAligned = (slice: Content.HeroSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "hero5050RightAligned"
          ? slice.primary.background_color
          : "white"
      }
    >
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        templateAreas={{ base: `"image" "content"`, md: `"content image"` }}
        alignItems={"center"}
      >
        <GridItem gridArea={"content"}>
          <ContainerWrapper>
            <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
              <TextBlockBottomButtonGroup
                textBlock={slice.primary.hero_text_block}
                button_group={slice.primary.button_group}
              />
            </BlurBox>
          </ContainerWrapper>
        </GridItem>
        <GridItem gridArea={"image"}>
          <Box>
            {slice.variation === "hero5050RightAligned" && (
              <PrismicNextImage
                style={{ width: "100%" }}
                field={slice.primary.image}
              />
            )}
          </Box>
        </GridItem>
      </Grid>
    </BackgroundColor>
  );
};

export default Hero5050RightAligned;
