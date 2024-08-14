"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Grid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamCardsSection`.
 */
export type TeamCardsSectionProps =
  SliceComponentProps<Content.TeamCardsSectionSlice>;

/**
 * Component for "TeamCardsSection" Slices.
 */
const TeamCardsSection = ({ slice }: TeamCardsSectionProps): JSX.Element => {
  // border and text color based on backgroundColor
  const borderColor =
    slice.primary.backgroundcolor === "secondary" ? "white" : "#178BFF";
  const textColor =
    slice.primary.backgroundcolor === "secondary" ? "white" : "black";

  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "default" ? slice.primary.backgroundcolor : "white"
      }
    >
      <ContainerWrapper>
        <Box mb={6} color={`${textColor}`}>
          <CustomHeading as="h2">{slice.primary.title}</CustomHeading>
        </Box>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
          justifyContent="space-between"
          alignItems="center"
        >
          {slice.primary.grid.map((item, i) => (
            <Card
              key={i}
              h="100%"
              variant="outline"
              bgColor="none"
              borderColor={borderColor}
            >
              <CardHeader>
                <Center>
                  <Box
                    as={PrismicNextImage}
                    borderRadius={"md"}
                    field={item.image}
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Stack gap={"1.25rem"} color={`${textColor}`}>
                  <CustomHeading as="h4">{item.name}</CustomHeading>
                  <Text>{item.title}</Text>
                </Stack>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TeamCardsSection;
