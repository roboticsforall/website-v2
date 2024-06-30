import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Theming`.
 */
export type ThemingProps = SliceComponentProps<Content.ThemingSlice>;

/**
 * Component for "Theming" Slices.
 */
const Theming = ({ slice }: ThemingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for theming (variation: {slice.variation}) Slices
    </section>
  );
};

export default Theming;
