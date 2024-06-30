import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TeamCardsSection`.
 */
export type TeamCardsSectionProps =
  SliceComponentProps<Content.TeamCardsSectionSlice>;

/**
 * Component for "TeamCardsSection" Slices.
 */
const TeamCardsSection = ({ slice }: TeamCardsSectionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for team_cards_section (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default TeamCardsSection;
