import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  Divider,
  Box,
  ButtonGroup,
  CardFooter,
  Flex,
  Container,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Explainer`.
 */
export type ExplainerProps = SliceComponentProps<Content.ExplainerSlice>;

/**
 * Component for "Explainer" Slices.
 */
const Explainer = ({ slice }: ExplainerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Box>
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}> 
        <Flex 
          justifyContent="space-evenly"
          align="center" 
          p={8} 
          bg="gray.50" 
          borderRadius="lg"
          boxShadow="lg"
          >
        <Box flex="1">
          <Heading as="h2" size="2xl">
          {slice.primary.title}
          </Heading>
        </Box>
        <Box flex="2">
          <Flex direction="column" py="8">
            <Heading as="h3" size="xl">
              {slice.primary.subtitle}
            </Heading>
            <PrismicRichText field={slice.primary.description} />
          </Flex>
          
        </Box>
        

      </Flex>
      </Container>
       </Box>
       
    </section>
  );
};

export default Explainer;
