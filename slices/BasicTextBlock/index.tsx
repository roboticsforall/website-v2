import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicRichText } from "@prismicio/react";
import dynamic from "next/dynamic";

const BlockCenterAligned = dynamic(() => import("./BlockCenterAligned"));
const BlockLeftAligned = dynamic(() => import("./BlockLeftAligned"));

/**
 * Props for `BasicTextBlock`.
 */
export type BasicTextBlockProps =
  SliceComponentProps<Content.BasicTextBlockSlice>;

/**
 * Component for "BasicTextBlock" Slices.
 */
const BasicTextBlock = ({ slice }: BasicTextBlockProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "blockCenterAligned" && (
        <BlockCenterAligned {...slice} />
      )}
      {slice.variation === "blockLeftAligned" && (
        <BlockLeftAligned {...slice} />
      )}
    </section>
  );
};

export default BasicTextBlock;
