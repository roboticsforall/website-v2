import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ThreeColumnExplainer`.
 */
export type ThreeColumnExplainerProps =
  SliceComponentProps<Content.ThreeColumnExplainerSlice>;

/**
 * Component for "ThreeColumnExplainer" Slices.
 */
const ThreeColumnExplainer = ({
  slice,
}: ThreeColumnExplainerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for three_column_explainer (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ThreeColumnExplainer;
