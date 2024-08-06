"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Hero5050LeftAligned } from "./Hero5050LeftAligned";
import { Hero5050RightAligned } from "./Hero5050RightAligned";
import { PageHeaderBlockCentered } from "./PageHeaderBlockCentered";
import { PageHeaderBlockLeftAligned } from "./PageHeaderBlockLeftAligned";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Render different components based on slice.variation */}
      {/* {slice.variation === "default" && <HeroFullImageLeftAligned {...slice} />} */}
      {slice.variation === "hero5050LeftAligned" && (
        <Hero5050LeftAligned {...slice} />
      )}
      {slice.variation === "hero5050RightAligned" && (
        <Hero5050RightAligned {...slice} />
      )}
      {slice.variation === "pageHeaderBlockLeftAligned" && (
        <PageHeaderBlockLeftAligned {...slice} />
      )}
      {slice.variation === "pageHeaderBlockCentered" && (
        <PageHeaderBlockCentered {...slice} />
      )}
    </section>
  );
};

export default Hero;
