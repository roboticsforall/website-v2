"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

const Hero5050LeftAligned = dynamic(() => import("./Hero5050LeftAligned"));
const Hero5050RightAligned = dynamic(() => import("./Hero5050RightAligned"));
const PageHeaderBlockCentered = dynamic(
  () => import("./PageHeaderBlockCentered")
);
const PageHeaderBlockLeftAligned = dynamic(
  () => import("./PageHeaderBlockLeftAligned")
);
const HeroFullImageLeftAligned = dynamic(
  () => import("./HeroFullImageLeftAligned")
);
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
      {slice.variation === "default" && <HeroFullImageLeftAligned {...slice} />}
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
