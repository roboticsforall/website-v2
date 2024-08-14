import { Box, Grid, Heading, Text, Center } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import styles from "./background.module.css";
//import { Heading }   from '../../app/components/Heading'
import { ContainerWrapper } from "../../app/components/ContainerWrapper";
import { CustomHeading } from "../../app/components/CustomHeading";
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
      <Box className={styles.backgroundImage}>
        <ContainerWrapper>
          <CustomHeading as="h3" size="xl" m={{ base: "1.25rem", md: "4rem" }}>
            {slice.primary.title}
          </CustomHeading>
          {slice.primary.testimonials.map((item, index) => (
            <Center pt={{ base: "1.25rem" }} key={index}>
              <Box
                bg={"white"}
                padding={{ base: "1.25rem", md: "4rem" }}
                width={{
                  sm: "calc(30% - 1.5rem * 2/3)",
                  lg: "calc(60% - 1.5rem * 2/3)",
                }}
              >
                <Text>
                  <PrismicRichText field={item.description} />
                </Text>
                <Text py={"1.25rem"}>{item.name}</Text>
                <Text>{item.user}</Text>
              </Box>
            </Center>
          ))}
        </ContainerWrapper>
      </Box>
    </section>
  );
};

export default Testimonials;
