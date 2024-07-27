import { Flex, Box, Center, Button } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { ColumnCard } from "../components/ColumnCard";
import { CustomHeading } from "@/app/components/CustomHeading";

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
