"use client";
import { Content } from "@prismicio/client";
import { Stack, SimpleGrid, Box } from "@chakra-ui/react";
import { PrismicNextImage } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { BlurBox } from "@/app/components/BlurBox";
import { TextBlockBottomButtonGroup } from "@/app/components/TextBlockBottomButtonGroup";

const FiftyFiftyLeftAligned = (slice: Content.FiftyFiftySlice): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.background_color}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <Box>
          <PrismicNextImage field={slice.primary.image} />
        </Box>

        <Stack justifyContent={"center"}>
          <ContainerWrapper>
            <TextBlockBottomButtonGroup
              textBlock={slice.primary.text_block}
              button_group={slice.primary.button_group}
            />
          </ContainerWrapper>
        </Stack>
      </SimpleGrid>
    </BackgroundColor>
  );
};

export default FiftyFiftyLeftAligned;
