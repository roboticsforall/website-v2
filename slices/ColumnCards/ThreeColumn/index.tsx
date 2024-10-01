"use client";
import { Box } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { ColumnCard } from "../../../app/components/ColumnCard";
import { Simplify } from "@/prismicio-types";
/**
 * Component for "ColumnCards" Slices.
 */
const ThreeColumn = (
  item: Simplify<Content.ColumnCardsSliceDefaultPrimaryCardsItem>
): JSX.Element => {
  return (
    <Box
      width={{
        base: "100%",
        sm: "calc(50% - 1.5rem * 2/3)",
        lg: "calc(33.33333% - 1.5rem * 2/3)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
      }}
    >
      <ColumnCard {...item} />
    </Box>
  );
};

export default ThreeColumn;
