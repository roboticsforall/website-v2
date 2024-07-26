
import {Box, Grid, Container, Text, Center} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import styles from './background.module.css'
import { Heading }   from '../../app/components/Heading'

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
  const backgroundImage = slice.primary.background_image;
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
    <div>
    <Box className={styles.backgroundImage} >
     <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]} my="70" >
         
            <Heading as="h3" size="xl" mx="70">
              {slice.primary.title}
            </Heading>
              {slice.primary.testimonials.map((item, i) => (
                <Center pt="69">
                  <Box bg={"white"} padding={70} key={i} width={{
                      sm: "calc(30% - 1.5rem * 2/3)",
                      lg: "calc(60% - 1.5rem * 2/3)"
                    }}>
                    <Text>
                      <PrismicRichText field={item.description} />
                    </Text>
                    <Text py={"1.25rem"}>{item.name}</Text>
                    <Text>{item.user}</Text>
                  </Box>
                </Center>
                  
              ))}
              
          
      </Container>
    </Box>
    </div>
    </section>
  );
};

export default Testimonials;
