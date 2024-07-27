import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { ColumnCard } from "../components/ColumnCard";
import { CustomHeading } from "@/app/components/CustomHeading";

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const ThreeColumnHeaderOnly = (
  slice: Content.ColumnCardsSlice
): JSX.Element => {
  // Implement ThreeColumnHeaderOnly layout based on `slice` data
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "threeColumnHeaderOnly"
          ? slice.primary.backgroundcolor
          : "white"
      }
    >
      <ContainerWrapper>
        <CustomHeading mb={5} textAlign="center" as="h2">
          Three Columns
        </CustomHeading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item, i) => (
            <Box
              key={i}
              width={{
                sm: "calc(50% - 1.5rem * 2/3)",
                lg: "calc(33.33333% - 1.5rem * 2/3)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
              }}
            >
              <ColumnCard item={item} />
            </Box>
          ))}
        </Flex>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default ThreeColumnHeaderOnly;
