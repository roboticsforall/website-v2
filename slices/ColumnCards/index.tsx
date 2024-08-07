"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";
import { TopHeadingGroup } from "../../app/components/TopHeadingGroup";
import { BottomButtonGroup } from "../../app/components/BottomButtonGroup";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

// Import all variation components
const ThreeColumn = dynamic(() => import("./ThreeColumn"));
const TwoColumn = dynamic(() => import("./TwoColumn"));
const FourColumn = dynamic(() => import("./FourColumn"));

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
          <TopHeadingGroup
            heading={slice.primary.heading}
            subheading={slice.primary.subheading}
          />
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {slice.primary.cards.map((item, i) => (
              <>
                {slice.variation === "default" && (
                  <ThreeColumn key={i} {...item} />
                )}
                {slice.variation === "twoColumn" && (
                  <TwoColumn key={i} {...item} />
                )}
                {slice.variation === "fourColumn" && (
                  <FourColumn key={i} {...item} />
                )}
              </>
            ))}
          </Flex>
          <BottomButtonGroup button_group={slice.primary.button_group} />
        </ContainerWrapper>
      </BackgroundColor>
    </section>
  );
};

export default ColumnCards;
