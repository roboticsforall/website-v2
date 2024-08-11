import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import {
  Box,
  Center,
  VStack,
  Text,
  Container,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { TextBlock } from "@/app/components/TextBlock";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";

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
        <VStack spacing={"2.5rem"} align="center">
          <Container textAlign={"center"}>
            <TextBlock textBlock={slice.primary.heading_text_block} />
          </Container>
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {slice.primary.numbered_cards.map((item, i) => (
              <Box
                key={i}
                width={{
                  sm: "100%",
                  md: "calc(50% - 1.5rem * 1/2)",
                  lg: "calc(25% - 1.5rem * 3/4)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
                }}
              >
                <Stack
                  justifyContent="center"
                  alignItems={["center", null, "start"]}
                  p={"1.25rem"}
                  textAlign={["center", null, "start"]}
                >
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
                  <Stack gap={"1.25rem"}>
                    <CustomHeading as="h4">{item.card_title}</CustomHeading>
                    <PrismicRichText field={item.card_description} />
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Flex>
          <BottomButtonGroup button_group={slice.primary.button_group} />
        </VStack>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default NumberedCardSection;
