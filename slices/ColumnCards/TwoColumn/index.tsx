import {
  Container,
  Heading,
  Flex,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Center,
  Box,
  Text,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const TwoColumn = (slice: Content.ColumnCardsSlice): JSX.Element => {
  // Implement TwoColumn layout based on `slice` data
  return (
    <Box bg={"primary.100"}>
      <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
        <Heading mb={5} textAlign="center" as="h2">
          {slice.primary.heading}
        </Heading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item) => (
            <Box flexGrow={1} width={{ md: "calc(50% - 1.5rem)" }}>
              <Card h="100%">
                {item.hasimage && (
                  <CardHeader>
                    <PrismicNextImage
                      field={item.image}
                      width={item.image.dimensions?.width}
                      height={item.image.dimensions?.height}
                    />
                  </CardHeader>
                )}
                <CardBody>
                  <Heading as="h4" size="md" mb={5}>
                    {item.title}
                  </Heading>
                  <Text>
                    <PrismicRichText field={item.description} />
                  </Text>
                </CardBody>
                {(item.haslink || item.hasbutton) && (
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      {item.hasbutton && <Button>Buy now</Button>}
                      {item.haslink && (
                        <Button variant="link">Add to cart</Button>
                      )}
                    </ButtonGroup>
                  </CardFooter>
                )}
              </Card>
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
              Contact Us
            </Button>
          )}
        </Center>
      </Container>
    </Box>
  );
};

export default TwoColumn;
