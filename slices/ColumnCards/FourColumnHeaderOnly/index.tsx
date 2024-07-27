import { Heading, Flex, Box } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { ColumnCard } from "../components/ColumnCard";
import { CustomHeading } from "@/app/components/CustomHeading";

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const FourColumnHeaderOnly = (slice: Content.ColumnCardsSlice): JSX.Element => {
  // Implement FourColumnHeaderOnly layout based on `slice` data
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "fourColumnHeaderOnly"
          ? slice.primary.backgroundcolor
          : "white"
      }
    >
      <ContainerWrapper>
        <CustomHeading mb={5} textAlign="center" as="h2">
          {slice.primary.heading}
        </CustomHeading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item, i) => (
            <Box
              key={i}
              width={{
                md: "calc(50% - 1.5rem * 1/2)",
                lg: "calc(25% - 1.5rem * 3/4)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
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

export default FourColumnHeaderOnly;
