import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Explainer`.
 */
export type ExplainerProps = SliceComponentProps<Content.ExplainerSlice>;

/**
 * Component for "Explainer" Slices.
 */
const Explainer = ({ slice }: ExplainerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for explainer (variation: {slice.variation}) Slices
    </section>
  );
};

export default Explainer;
