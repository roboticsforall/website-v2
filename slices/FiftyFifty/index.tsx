"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import FiftyFiftyLeftAligned from "./FiftyFiftyLeftAligned";
import FiftyFiftyRightAligned from "./FiftyFiftyRightAligned";

export type FiftyFiftyProps = SliceComponentProps<Content.FiftyFiftySlice>;

const FiftyFifty = ({ slice }: FiftyFiftyProps): JSX.Element => {
  return (
    <section>
      {slice.variation === "default" && <FiftyFiftyLeftAligned {...slice} />}
      {slice.variation === "fiftyFiftyRightAligned" && (
        <FiftyFiftyRightAligned {...slice} />
      )}
    </section>
  );
};

export default FiftyFifty;
