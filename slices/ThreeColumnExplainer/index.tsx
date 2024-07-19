import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Box, Flex, Text, Heading, Card, CardBody, Grid,} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

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
    <BackgroundColor
      backgroundColor={
        slice.variation === "default" ? slice.primary.backgroundcolor : "white"
      }
    >
      <ContainerWrapper >
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 2fr",
          }}
          gap="1.5rem"
          py="8"
          color="black"
        >

          {/* First Column */}
          <Flex
            justify="center"
            align="center"
          >
            <Box
              width={{
                sm: "100%",
                lg: "calc(100% - 1.5rem * 2/3)",
              }}
            >
              <Heading as="h3" size="xl">
                {slice.primary.title}
              </Heading>
              <Text mt="1.25rem">
                <PrismicRichText field={slice.primary.description} />
              </Text>
            </Box>
          </Flex>

          {/* Second Column */}
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {slice.primary.multi_column_explainer.map((item, i) => (
              <Box
                width={{
                  md: "calc(50% - 1.5rem * 2/3)",
                }}
              >
                <Card bg="#EBEBEB" color="black" height="100%" padding={5}>
                  <CardBody>
                    <Text as='b' fontSize='2xl' >
                      {item.title}
                    </Text>
                    <Text mt="1.25rem">
                        <PrismicRichText field={item.description} />
                    </Text>
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
