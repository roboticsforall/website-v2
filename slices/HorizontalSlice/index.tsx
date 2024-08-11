import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

const LeftImage = dynamic(() => import("./LeftImage"));
const RightImage = dynamic(() => import("./RightImage"));

/**
 * Props for `HorizontalSlice`.
 */
export type HorizontalSliceProps =
  SliceComponentProps<Content.HorizontalSliceSlice>;

/**
 * Component for "HorizontalSlice" Slices.
 */
const HorizontalSlice = ({ slice }: HorizontalSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "rightImage" && <RightImage {...slice} />}
      {slice.variation === "leftImage" && <LeftImage {...slice} />}
    </section>
  );
};

export default HorizontalSlice;

// const LeftImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
//   return (
//     <BackgroundColor
//       backgroundColor={
//         slice.variation === "leftImage"
//           ? slice.primary.background_color
//           : "white"
//       }
//     >
//       <ContainerWrapper>
//         <SimpleGrid columns={{ lg: 2 }} spacing={"1.5rem"}>
//           <Box>
//             <PrismicNextImage field={slice.primary.image} />
//           </Box>
//           <Stack justifyContent={"center"}>
//             <Box>
//               <Heading mb={"1.25rem"} as="h2">
//                 {slice.primary.title}
//               </Heading>
//               <Text>{slice.primary.description}</Text>

//               <PrismicNextLink
//                 field={
//                   slice.variation === "leftImage"
//                     ? slice.primary.buttonlink
//                     : null
//                 }
//               >
//                 {slice.variation == "leftImage" && (
//                   <Button
//                     mt="2.5rem"
//                     variant={
//                       slice.primary.button_variation == "solid"
//                         ? "solid"
//                         : "outline"
//                     }
//                   >
//                     {slice.variation === "leftImage"
//                       ? slice.primary.buttontext
//                       : ""}
//                   </Button>
//                 )}
//               </PrismicNextLink>
//             </Box>
//           </Stack>
//         </SimpleGrid>

//       </ContainerWrapper>
//     </BackgroundColor>
//   );
// };

// const LeftImageNoButton = (slice: Content.HorizontalSliceSlice): JSX.Element => {
//   return (
//     <BackgroundColor
//       backgroundColor={
//         slice.variation === "leftImageNoButton"
//           ? slice.primary.background_color
//           : "white"
//       }
//     >
//       <ContainerWrapper>
//         <SimpleGrid columns={{ lg: 2 }} spacing={"1.5rem"}>
//           <Box>
//             <PrismicNextImage field={slice.primary.image} />
//           </Box>
//           <Stack justifyContent={"center"}>
//             <Box>
//               <Heading mb={"1.25rem"} as="h2">
//                 {slice.primary.title}
//               </Heading>
//               <Text>{slice.primary.description}</Text>

//             </Box>
//           </Stack>
//         </SimpleGrid>

//       </ContainerWrapper>
//     </BackgroundColor>
//   );
// };

// const RightImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
//   return (
//     <BackgroundColor
//       backgroundColor={
//         slice.variation === "rightImage"
//           ? slice.primary.background_color
//           : "white"
//       }
//     >
//       <ContainerWrapper>
//         <SimpleGrid
//           columns={{ base: 1, lg: 2 }}
//           spacing={"1.5rem"}
//           templateAreas={{ base: `"image" "content"`, lg: `"content image"` }}
//           direction={{ base: "column", lg: "row" }}
//         >
//           <Box gridArea="image">
//             <PrismicNextImage field={slice.primary.image} />
//           </Box>
//           <Stack gridArea="content" justifyContent={"center"} spacing={4}>
//             <Box>
//               <Heading mb={"1.25rem"} as="h2">
//                 {slice.primary.title}
//               </Heading>
//               <Text >{slice.primary.description}</Text>
//               <PrismicNextLink
//                 field={
//                   slice.variation === "rightImage"
//                     ? slice.primary.buttonlink
//                     : null
//                 }
//               >
//                 {slice.variation === "rightImage" && (
//                   <Button
//                     mt="2.5rem"
//                     variant={
//                       slice.primary.button_variation === "solid"
//                         ? "solid"
//                         : "outline"
//                     }
//                   >
//                     {slice.primary.buttontext}
//                   </Button>
//                 )}
//               </PrismicNextLink>
//             </Box>
//           </Stack>
//         </SimpleGrid>
//       </ContainerWrapper>
//     </BackgroundColor>
//   );
// };

// const RightImageNoButton = (slice: Content.HorizontalSliceSlice): JSX.Element => {
//   return (
//     <BackgroundColor
//       backgroundColor={
//         slice.variation === "rightImage"
//           ? slice.primary.background_color
//           : "white"
//       }
//     >
//       <ContainerWrapper>
//         <SimpleGrid
//           columns={{ base: 1, lg: 2 }}
//           spacing={"1.5rem"}
//           templateAreas={{ base: `"image" "content"`, lg: `"content image"` }}
//           direction={{ base: "column", lg: "row" }}
//         >
//           <Box gridArea="image">
//             <PrismicNextImage field={slice.primary.image} />
//           </Box>
//           <Stack gridArea="content" justifyContent={"center"} spacing={4}>
//             <Box>
//               <Heading mb={"1.25rem"} as="h2">
//                 {slice.primary.title}
//               </Heading>
//               <Text >{slice.primary.description}</Text>

//             </Box>
//           </Stack>
//         </SimpleGrid>
//       </ContainerWrapper>
//     </BackgroundColor>
//   );
// };
