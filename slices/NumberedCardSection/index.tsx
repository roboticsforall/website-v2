import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import {
  Box,
  Button,
  Center,
  SimpleGrid,
  VStack,
  Text,
  ButtonGroup,
  Container,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NumberedCardSection`.
 */
export type NumberedCardSectionProps =
  SliceComponentProps<Content.NumberedCardSectionSlice>;

/**
 * Component for "NumberedCardSection" Slices.
 */
const NumberedCardSection = ({
  slice,
}: NumberedCardSectionProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Box bg={slice.primary.backgroundcolor} color="black">
          <VStack spacing={4} align="center">
            <Container>
              <TextBlock textBlock={slice.primary.heading_text_block} />
            </Container>
            <SimpleGrid columns={{ base: 1, md: 4 }} spacing={4}>
              {slice.primary.numbered_cards.map((item, index) => (
                <Box key={index} p={8}>
                  <Center
                    w={12}
                    h={12}
                    bg="primary.500"
                    color="white"
                    borderRadius="full"
                    mb={4}
                  >
                    <Text as="b" fontSize="2xl">
                      {item.number}
                    </Text>
                  </Center>
                  <Text as="b" fontSize="lg">
                    {item.card_title}
                  </Text>
                  <Text mt="1.25rem">
                    <PrismicRichText field={item.card_description} />
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
            <ButtonGroup spacing="1.5rem">
              {slice.primary.buttongroup.map((item) => (
                <Button
                  variant={
                    item.button_variation == "solid" ? "solid" : "outline"
                  }
                >
                  {item.button_text}
                </Button>
              ))}
            </ButtonGroup>
          </VStack>
        </Box>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default NumberedCardSection;
