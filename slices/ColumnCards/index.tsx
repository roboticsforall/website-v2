"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Center, Container, Flex, Stack } from "@chakra-ui/react";
import { TextBlock } from "@/app/components/TextBlock";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import ThreeColumn from "./ThreeColumn";
import TwoColumn from "./TwoColumn";
import FourColumn from "./FourColumn";

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const ColumnCards = ({ slice }: ColumnCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Render different components based on slice.variation */}
      <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
        <ContainerWrapper>
          <Stack gap={"2.5rem"}>
            <Container p={0} textAlign={{ md: "center" }}>
              <TextBlock textBlock={slice.primary.heading_text_block} />
            </Container>
            <Flex gap={6} wrap="wrap" justifyContent={"center"}>
              {slice.primary.cards.map((item, i) => {
                if (slice.variation === "default") {
                  return <ThreeColumn key={i} {...item} />;
                } else if (slice.variation === "twoColumn") {
                  return <TwoColumn key={i} {...item} />;
                } else if (slice.variation === "fourColumn") {
                  return <FourColumn key={i} {...item} />;
                }
                return <></>;
              })}
            </Flex>
            <Center>
              <BottomButtonGroup button_group={slice.primary.button_group} />
            </Center>
          </Stack>
        </ContainerWrapper>
      </BackgroundColor>
    </section>
  );
};

export default ColumnCards;
