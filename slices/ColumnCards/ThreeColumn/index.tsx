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

/**
 * Props for `ColumnCards`.
 */
export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

/**
 * Component for "ColumnCards" Slices.
 */
const ThreeColumn = (slice: Content.ColumnCardsSlice): JSX.Element => {
  return (
    <Box bgGradient="linear-gradient(70deg, rgba(224,255,238,1) 15%, rgba(159,225,251,1) 46%, rgba(104,172,255,1) 100%)">
      <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
        <Heading mb={5} textAlign="center" as="h2">
          Three Columns
        </Heading>
        <Flex gap={6} wrap="wrap" justifyContent={"center"}>
          {slice.primary.cards.map((item) => (
            <Box
              width={{
                sm: "calc(50% - 1.5rem * 2/3)",
                lg: "calc(33.33333% - 1.5rem * 2/3)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
              }}
            >
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
                {(item.hasimage || item.hasbutton) && (
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      {item.hasbutton && <Button>Buy now</Button>}
                      <Button variant="link">Add to cart</Button>
                    </ButtonGroup>
                  </CardFooter>
                )}
              </Card>
            </Box>
          ))}
        </Flex>
        <Center mt={"2.5rem"}>
          <Button
            variant={
              slice.primary.button_variation == "solid" ? "solid" : "outline"
            }
          >
            Contact Us
          </Button>
        </Center>
      </Container>
    </Box>
  );
};

export default ThreeColumn;
