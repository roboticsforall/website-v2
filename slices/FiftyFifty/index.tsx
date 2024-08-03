import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Center, SimpleGrid, Box } from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
export type FiftyFiftyProps = SliceComponentProps<Content.FiftyFiftySlice>;

const FiftyFifty = ({ slice }: FiftyFiftyProps): JSX.Element => {
  return (
    <section>
      <BackgroundColor backgroundColor={ slice.variation=="default" ? "primary" : "white"}>
      <SimpleGrid columns={{ sm:1, lg: 2}} >
          <Box>
            <PrismicNextImage field={slice.primary.image} />
          </Box>

          <Stack  justifyContent={"center"}>
            <ContainerWrapper>
            <Box>
              <CustomHeading mb={"1.25rem"} as="h3">
              {slice.primary.title}
              </CustomHeading>
              <Text>{slice.primary.description}</Text>

              <PrismicNextLink
                field={slice.primary.buttonlink}
              >
                  <Button
                    mt="2.5rem"
                    variant={
                      slice.variation == "default"
                        ? "solid"
                        : "outline"
                    }
                  >
                    {slice.primary.buttontext}
                  </Button>
                </PrismicNextLink>
            </Box>
            </ContainerWrapper>
          </Stack>
          
        </SimpleGrid>
      </BackgroundColor>
    </section>
  );
};

export default FiftyFifty;
