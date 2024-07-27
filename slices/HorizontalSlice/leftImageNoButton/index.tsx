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
  
const LeftImageNoButton = (slice: Content.HorizontalSliceSlice): JSX.Element => {
    return (
      <BackgroundColor
        backgroundColor={
          slice.variation === "leftImageNoButton"
            ? slice.primary.background_color
            : "white"
        }
      >
        <ContainerWrapper>
          <SimpleGrid columns={{ lg: 2 }} spacing={"1.5rem"}>
            <Box>
              <PrismicNextImage field={slice.primary.image} />
            </Box>
            <Stack justifyContent={"center"}>
              <Box>
                <Heading mb={"1.25rem"} as="h2">
                  {slice.primary.title}
                </Heading>
                <Text>{slice.primary.description}</Text>
  
              </Box>
            </Stack>
          </SimpleGrid>
  
        </ContainerWrapper>
      </BackgroundColor>
    );
  };

  export default LeftImageNoButton;