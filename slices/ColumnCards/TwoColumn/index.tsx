"use client";
import { Box } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { ColumnCard } from "../../../app/components/ColumnCard";
import { Simplify } from "@/prismicio-types";

const TwoColumn = (
  item: Simplify<Content.ColumnCardsSliceDefaultPrimaryCardsItem>
): JSX.Element => {
  // Implement TwoColumn layout based on `slice` data
  return (
    <Box width={{ md: "calc(50% - 1.5rem)" }}>
      <ColumnCard {...item} />
    </Box>
  );
};

export default TwoColumn;
