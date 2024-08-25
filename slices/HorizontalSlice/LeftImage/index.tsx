"use client";
import { Content } from "@prismicio/client";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const LeftImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.background_color!}>
      <ContainerWrapper>
        <SimpleGrid columns={{ md: 2 }} spacing={"1.5rem"}>
          <Box
            as={PrismicNextImage}
            borderRadius={"md"}
            field={slice.primary.image}
          />
          <Stack justifyContent={"center"}>
            <TextBlockBottomButtonGroup
              textBlock={slice.primary.heading_text_block}
              button_group={slice.primary.button_group}
            />
          </Stack>
        </SimpleGrid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default LeftImage;
