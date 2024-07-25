import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Grid,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

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
          <Heading as="h3" size="xl">
            {slice.primary.title}
          </Heading>
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
                  <PrismicNextImage
                    field={item.image}
                    width={"500"}
                    height={"500"}
                    style={{ objectFit: "cover" }}
                  />
                </Center>
              </CardHeader>
              <CardBody>
                <Box alignContent="center" color={`${textColor}`}>
                  <Text fontWeight="bold" mb="4">
                    {item.name}
                  </Text>
                  <Text>{item.title}</Text>
                </Box>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TeamCardsSection;
