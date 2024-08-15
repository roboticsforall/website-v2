

"use client";


import { Box, IconButton, Text, Center } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import styles from './background.module.css';
import { ContainerWrapper } from "../../app/components/ContainerWrapper";
import { CustomHeading } from "../../app/components/CustomHeading";
import { useState } from "react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';


/**
* Props for `Testimonials`.
*/
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;


/**
* Component for "Testimonials" Slices.
*/
const Testimonials = ({ slice }: TestimonialsProps): JSX.Element => {
 const [currentIndex, setCurrentIndex] = useState(0);


 const nextSlide = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === slice.primary.testimonials.length - 1 ? 0 : prevIndex + 1
   );
 };


 const prevSlide = () => {
   setCurrentIndex((prevIndex) =>
     prevIndex === 0 ? slice.primary.testimonials.length - 1 : prevIndex - 1
   );
 };


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
         <Box
           display="flex"
           transition="transform 0.3s ease-in-out"
           transform={`translateX(-${currentIndex * 100}%)`}
           width="100%"
         >
           {slice.primary.testimonials.map((item, index) => (
             <Box
               key={index}
               minWidth="100%"
               flexShrink={0}
             >
               <Center p={{ base: "1.25rem" }}>
                 <Box
                   bg="white"
                   padding={{ base: "1.25rem", md: "4rem" }}
                   width={{
                     sm: "calc(30% - 1.5rem * 2/3)",
                     lg: "calc(60% - 1.5rem * 2/3)",
                   }}
                 >
                   <Text>
                     <PrismicRichText field={item.description} />
                   </Text>
                   <Text py="1.25rem">{item.name}</Text>
                   <Text>{item.user}</Text>
                 </Box>
               </Center>
             </Box>
           ))}




         </Box>
         <IconButton
           aria-label="right-arrow"
           onClick={nextSlide}
           position="absolute"
           right="45%"
           bottom="28%"
           transform="translateY(-50%)"
         >
           <ArrowForwardIcon />
         </IconButton>
         <IconButton
           aria-label="left-arrow"
           onClick={prevSlide}
           position="absolute"
           left="45%"
           bottom="28%"
           transform="translateY(-50%)"
         >
           <ArrowBackIcon />
         </IconButton>


       
       </ContainerWrapper>
     </Box>
   </section>
 );
};


export default Testimonials;
