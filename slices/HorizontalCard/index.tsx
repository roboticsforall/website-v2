import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HorizontalCard`.
 */
export type HorizontalCardProps =
  SliceComponentProps<Content.HorizontalCardSlice>;

/**
 * Component for "HorizontalCard" Slices.
 */
const HorizontalCard = ({ slice }: HorizontalCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for horizontal_card (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HorizontalCard;
