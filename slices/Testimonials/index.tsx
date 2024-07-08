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
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Box p={12} bg={"primary.100"}>
       
          <Heading as="h3" size="xl">
            {slice.primary.title}
          </Heading>   
      
        
      <Box >
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
        <Flex flexWrap="wrap" justifyContent="space-between" px="4" w="full" alignItems="center">
          {slice.primary.testimonials.map((item, i) => (
            <Box key={i}>
              <PrismicRichText field={item.description} />
              <Text>{item.name}</Text>
              <Text>{item.user}</Text>
            </Box>
            
          ))}
       
          </Flex>
        </Container>
      </Box>
    </Box>
       
    </section>
  );
};

export default Testimonials;
