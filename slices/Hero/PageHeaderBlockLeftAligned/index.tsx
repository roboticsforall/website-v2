import { Content } from "@prismicio/client";
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
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";

export const PageHeaderBlockLeftAligned = (
  slice: Content.HeroSlice
): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "pageHeaderBlockLeftAligned"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <CustomHeading mb={"1.25rem"} as="h2">
          {slice.primary.hero_header}
        </CustomHeading>
        <PrismicRichText field={slice.primary.hero_description} />
        <Button
          mt="2.5rem"
          as={PrismicNextLink}
          field={slice.primary.button_link}
          variant={
            slice.primary.button_variation == "solid" ? "solid" : "outline"
          }
        >
          {slice.primary.button_text}
        </Button>
      </ContainerWrapper>
    </BackgroundColor>
  );
};
