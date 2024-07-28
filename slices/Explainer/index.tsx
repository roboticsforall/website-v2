import {Box, Flex, Heading, Text, Center } from "@chakra-ui/react";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";

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
      <Box my={"4rem"}>
      <ContainerWrapper>
      <Flex
          gap={{ base: "4rem", md: "1.5rem" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Center>
            <Heading as="h2" size="2xl" position={"absolute"}>
              {slice.primary.title} 
            </Heading>
            <Box>
              <svg xmlns="http://www.w3.org/2000/svg" width="385" height="339" viewBox="0 0 385 339" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M171.732 339C171.732 292.662 133.291 255.098 85.8661 255.098C38.4411 255.098 0 292.662 0 339H171.732ZM356.53 223.195L348.153 237.366L277.275 230.336L240.67 171.061L256.91 144.32L272.491 117.207L343.332 118.547L385 175.007L375.338 191.362L304.924 151.642L286.116 183.475L356.53 223.195ZM129.428 112.899L231.112 166.063L247.599 138.922L261.718 114.346L158.283 47.3135C162.345 79.4016 141.554 110.595 108.736 119.192C84.1102 125.637 58.8387 117.754 42.3043 100.843V254.634C55.3932 248.166 70.1907 244.516 85.8661 244.516C101.537 244.516 116.334 248.166 129.428 254.634V112.899ZM85.8661 35.8044C74.7704 38.7072 68.1832 49.8545 71.1588 60.6959C74.1297 71.5418 85.5387 77.9734 96.6344 75.0706C107.735 72.1632 114.317 61.0205 111.346 50.1745C108.371 39.3332 96.9666 32.897 85.8661 35.8044ZM76.5691 1.9032C46.3097 9.82322 28.3515 40.2142 36.4622 69.7798C44.568 99.3454 75.6721 116.892 105.931 108.972C136.191 101.047 154.149 70.6562 146.043 41.0906C137.933 11.525 106.833 -6.02145 76.5691 1.9032ZM83.0661 25.5844C66.2707 29.9803 56.1953 47.0213 60.6991 63.4363C65.1981 79.8467 82.6437 89.6865 99.4392 85.2906C116.235 80.8901 126.305 63.849 121.806 47.4387C117.302 31.0236 99.8616 21.1839 83.0661 25.5844Z" fill="#D0E7FF"/>
              </svg>
            </Box>
          </Center>

          <Center mx={"2rem"}>
            {slice.primary.explainer.map((item, index) => (
              <Flex direction={"column"} key={index}>
                <Box width={{ md: "calc(80% - 1.5rem)" }}>
                  <Heading as="h3" size="xl">
                    {item.title}
                  </Heading>
                  <Text alignSelf={"stretch"} mt={"1.25rem"}>
                    <PrismicRichText field={item.description} />
                  </Text>
                </Box>
              </Flex>
          ))}
          </Center>
        </Flex>
      </ContainerWrapper>
    </Box>
    </section>
  );
};

export default Explainer;
