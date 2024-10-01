"use client";
import { Box } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { ColumnCard } from "../../../app/components/ColumnCard";
import { Simplify } from "@/prismicio-types";

const FourColumn = (
  item: Simplify<Content.ColumnCardsSliceDefaultPrimaryCardsItem>
): JSX.Element => {
  // Implement FourColumn layout based on `slice` data
  return (
    <Box
      width={{
        base: "100%",
        md: "calc(50% - 1.5rem * 1/2)",
        lg: "calc(25% - 1.5rem * 3/4)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
      }}
    >
      <ColumnCard {...item} />
    </Box>
  );
};

export default FourColumn;
