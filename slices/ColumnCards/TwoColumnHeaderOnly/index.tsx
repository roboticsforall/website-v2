import { Flex, Box } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { ColumnCard } from "../components/ColumnCard";
import { CustomHeading } from "@/app/components/CustomHeading";

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
