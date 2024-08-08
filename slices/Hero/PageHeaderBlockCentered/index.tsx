import { Content } from "@prismicio/client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TopHeadingGroup } from "@/app/components/TopHeadingGroup";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";
import { BlurBox } from "@/app/components/BlurBox";

export const PageHeaderBlockCentered = (
  slice: Content.HeroSlice
): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "pageHeaderBlockCentered"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <BlurBox
          textAlign="center"
          hasBlur={slice.primary.has_header_white_highlight}
        >
          <TopHeadingGroup
            heading={slice.primary.hero_header}
            subheading={slice.primary.hero_description}
          />
          <BottomButtonGroup
            justifyContent="center"
            button_group={slice.primary.button_group}
          />
        </BlurBox>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default PageHeaderBlockCentered;
