import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import LeftImage from "./LeftImage";
import RightImage from "./RightImage";

/**
 * Props for `HorizontalSlice`.
 */
export type HorizontalSliceProps =
  SliceComponentProps<Content.HorizontalSliceSlice>;

/**
 * Component for "HorizontalSlice" Slices.
 */
const HorizontalSlice = ({ slice }: HorizontalSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "rightImage" && <RightImage {...slice} />}
      {slice.variation === "leftImage" && <LeftImage {...slice} />}
    </section>
  );
};

export default HorizontalSlice;
