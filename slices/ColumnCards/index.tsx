import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import dynamic from "next/dynamic";

// Import all variation components
const ThreeColumn = dynamic(() => import("./ThreeColumn"));
const TwoColumn = dynamic(() => import("./TwoColumn"));
const FourColumn = dynamic(() => import("./FourColumn"));
const ThreeColumnHeaderOnly = dynamic(() => import("./ThreeColumnHeaderOnly"));
const TwoColumnHeaderOnly = dynamic(() => import("./TwoColumnHeaderOnly"));
const FourColumnHeaderOnly = dynamic(() => import("./FourColumnHeaderOnly"));

export type ColumnCardsProps = SliceComponentProps<Content.ColumnCardsSlice>;

const ColumnCards = ({ slice }: ColumnCardsProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {/* Render different components based on slice.variation */}
      {slice.variation === "default" && <ThreeColumn {...slice} />}
      {slice.variation === "threeColumnHeaderOnly" && (
        <ThreeColumnHeaderOnly {...slice} />
      )}
      {slice.variation === "twoColumn" && <TwoColumn {...slice} />}
      {slice.variation === "twoColumnHeaderOnly" && (
        <TwoColumnHeaderOnly {...slice} />
      )}
      {slice.variation === "fourColumn" && <FourColumn {...slice} />}
      {slice.variation === "fourColumnHeaderOnly" && (
        <FourColumnHeaderOnly {...slice} />
      )}
    </section>
  );
};

export default ColumnCards;
