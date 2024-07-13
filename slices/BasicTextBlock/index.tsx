import {Box, Grid, Button, Container, Heading, Text, Center, Flex} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";

/**
 * Props for `BasicTextBlock`.
 */
export type BasicTextBlockProps =
  SliceComponentProps<Content.BasicTextBlockSlice>;

/**
 * Component for "BasicTextBlock" Slices.
 */
const BasicTextBlock = ({ slice }: BasicTextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Box>
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
          <Flex direction={"column"} px="120" py={"70"}>
            <Heading as="h2" size="2xl" mb={"1.5rem"}>
              {slice.primary.title}
            </Heading>
            <Heading as="h3" size="xl" mb={"1.5rem"}>
              {slice.primary.subtitle}
            </Heading>

            <Text mb={"2.5rem"}>
              <PrismicRichText field={slice.primary.description} />
            </Text>

          
              <Box >
              <PrismicNextLink field={slice.primary.button_solid} >
                <Button variant="solid" mr={"6"}>
                  {slice.primary.buttonText}
                </Button>
            </PrismicNextLink>

            <PrismicNextLink field={slice.primary.button_outlined}>
              <Button variant="outline">
              {slice.primary.buttonText}
                </Button>
          </PrismicNextLink>
          </Box>
          </Flex>
        </Container>
      </Box>
    </section>
  );
};

export default BasicTextBlock;
