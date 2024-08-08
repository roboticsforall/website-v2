import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
export type HorizontalSliceProps =
  SliceComponentProps<Content.HorizontalSliceSlice>;
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
const RightImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "rightImage"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={"1.5rem"}
          templateAreas={{ base: `"image" "content"`, lg: `"content" "image"` }}
          direction={{ base: "column", lg: "row" }}
        >
          <Box gridArea="image">
            <PrismicNextImage field={slice.primary.image} />
          </Box>
          <Stack gridArea="content" justifyContent={"center"} spacing={4}>
            <Box>
              <Heading mb={"1.25rem"} as="h2">
                {slice.primary.title}
              </Heading>
              <Text>{slice.primary.description}</Text>
              <PrismicNextLink
                field={
                  slice.variation === "rightImage"
                    ? slice.primary.buttonlink
                    : null
                }
              >
                {slice.variation === "rightImage" && (
                  <Button
                    mt="2.5rem"
                    variant={
                      slice.primary.button_variation === "solid"
                        ? "solid"
                        : "outline"
                    }
                  >
                    {slice.primary.buttontext}
                  </Button>
                )}
              </PrismicNextLink>
            </Box>
          </Stack>
        </SimpleGrid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default RightImage;
