import { asText, Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Center,
  SimpleGrid,
  Box,
  Flex,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";
import { BlurBox } from "@/app/components/BlurBox";

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
        <Box>
          {slice.variation === "hero5050LeftAligned" && (
            <PrismicNextImage field={slice.primary.image} />
          )}
        </Box>

        <Stack justifyContent={"center"}>
          <ContainerWrapper>
            <BlurBox hasBlur={slice.primary.has_header_white_highlight}>
              <TopHeadingGroup
                heading={slice.primary.hero_header}
                subheading={slice.primary.hero_description}
              />
              <BottomButtonGroup button_group={slice.primary.button_group} />
            </BlurBox>
          </ContainerWrapper>
        </Stack>
      </SimpleGrid>
    </BackgroundColor>
  );
};

export default Hero5050LeftAligned;
