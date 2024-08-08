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
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import { BlurBox } from "@/app/components/BlurBox";

export const PageHeaderBlockCentered = (
  slice: Content.HeroSlice
): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "pageHeaderBlockCentered"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <BlurBox
          textAlign="center"
          hasBlur={slice.primary.has_header_white_highlight}
        >
          <TopHeadingGroup
            heading={slice.primary.hero_header}
            subheading={slice.primary.hero_description}
          />
          <BottomButtonGroup
            justifyContent="center"
            button_group={slice.primary.button_group}
          />
        </BlurBox>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default PageHeaderBlockCentered;
