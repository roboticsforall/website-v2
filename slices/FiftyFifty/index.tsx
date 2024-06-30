import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `FiftyFifty`.
 */
export type FiftyFiftyProps = SliceComponentProps<Content.FiftyFiftySlice>;

/**
 * Component for "FiftyFifty" Slices.
 */
const FiftyFifty = ({ slice }: FiftyFiftyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fifty_fifty (variation: {slice.variation})
      Slices
    </section>
  );
};

export default FiftyFifty;
