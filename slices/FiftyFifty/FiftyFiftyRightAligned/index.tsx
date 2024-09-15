"use client";
import { Content } from "@prismicio/client";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const FiftyFiftyRightAligned = (
  slice: Content.FiftyFiftySlice
): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.background_color}>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        templateAreas={{ base: `"image" "content"`, md: `"content image"` }}
        alignItems={"center"}
      >
        <GridItem gridArea={"content"} pl={'2rem'}>
          <ContainerWrapper>
            <TextBlockBottomButtonGroup
              
              textBlock={slice.primary.text_block}
              button_group={slice.primary.button_group}
            />
          </ContainerWrapper>
        </GridItem>
        <GridItem gridArea={"image"}>
          <Box >
            <PrismicNextImage field={slice.primary.image} />
          </Box>
        </GridItem>
      </Grid>
    </BackgroundColor>
  );
};

export default FiftyFiftyRightAligned;
