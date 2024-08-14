"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TextBlock } from "@/app/components/TextBlock";
import { Box, Flex, Card, CardBody, Grid } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeColumnExplainer`.
 */
export type ThreeColumnExplainerProps =
  SliceComponentProps<Content.ThreeColumnExplainerSlice>;

/**
 * Component for "ThreeColumnExplainer" Slices.
 */
const ThreeColumnExplainer = ({
  slice,
}: ThreeColumnExplainerProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 2fr",
          }}
          gap="1.5rem"
        >
          {/* First Column */}
          <Flex justify="center" align="center">
            <Box
              width={{
                sm: "100%",
                lg: "calc(100% - 1.5rem * 2/3)",
              }}
            >
              <TextBlock textBlock={slice.primary.heading_text_block} />
            </Box>
          </Flex>

          {/* Second Column */}
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {slice.primary.multi_column_explainer.map((item, i) => (
              <Box
                width={{
                  md: "calc(50% - 1.5rem * 2/3)",
                }}
                key={i}
              >
                <Card bg={"gray.gray2"} height="100%">
                  <CardBody>
                    <TextBlock textBlock={item.card_text_block} />
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Flex>
        </Grid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default ThreeColumnExplainer;
