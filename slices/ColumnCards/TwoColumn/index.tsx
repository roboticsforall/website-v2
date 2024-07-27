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
import { PrismicRichText } from "@prismicio/react";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { ColumnCard } from "../components/ColumnCard";

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const TwoColumn = (slice: Content.ColumnCardsSlice): JSX.Element => {
  // Implement TwoColumn layout based on `slice` data
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "twoColumn"
          ? slice.primary.backgroundcolor
          : "white"
      }
    >
      <ContainerWrapper>
        <Heading mb={5} textAlign="center" as="h2">
          {slice.primary.heading}
        </Heading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item) => (
            <Box width={{ md: "calc(50% - 1.5rem)" }}>
              <ColumnCard item={item} />
            </Box>
          ))}
        </Flex>
        <Center mt={"2.5rem"}>
          {slice.variation == "twoColumn" && (
            <Button
              variant={
                slice.primary.button_variation == "solid" ? "solid" : "outline"
              }
            >
              {slice.primary.button_text}
            </Button>
          )}
        </Center>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TwoColumn;
