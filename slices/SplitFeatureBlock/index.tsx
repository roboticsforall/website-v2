import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

// Import all variation components
const ThreeColumn = dynamic(() => import("./ThreeColumn"));
const TwoColumn = dynamic(() => import("./TwoColumn"));
const FourColumn = dynamic(() => import("./FourColumn"));

/**
 * Props for `SplitFeatureBlock`.
 */
export type SplitFeatureBlockProps =
  SliceComponentProps<Content.SplitFeatureBlockSlice>;

/**
 * Component for "SplitFeatureBlock" Slices.
 */
const SplitFeatureBlock = ({ slice }: SplitFeatureBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Render different components based on slice.variation */}
      {slice.variation === "default" && <ThreeColumn {...slice} />}
      {slice.variation === "twoColumn" && <TwoColumn {...slice} />}
      {slice.variation === "threeColumn" && <ThreeColumn {...slice} />}
      {slice.variation === "fourColumn" && <FourColumn {...slice} />}
    </section>
  );
};

export default SplitFeatureBlock;
