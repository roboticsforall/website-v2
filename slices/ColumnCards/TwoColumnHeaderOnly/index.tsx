import {
  Container,
  Heading,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Center,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { ColumnCard } from "../components/ColumnCard";
import { CustomHeading } from "@/app/components/CustomHeading";

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const TwoColumnHeaderOnly = (slice: Content.ColumnCardsSlice): JSX.Element => {
  // Implement TwoColumnHeaderOnly layout based on `slice` data
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "twoColumnHeaderOnly"
          ? slice.primary.backgroundcolor
          : "white"
      }
    >
      <ContainerWrapper>
        <CustomHeading mb={5} textAlign="center" as="h2">
          {slice.primary.heading}
        </CustomHeading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item) => (
            <Box width={{ md: "calc(50% - 1.5rem)" }}>
              <ColumnCard item={item} />
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TwoColumnHeaderOnly;
