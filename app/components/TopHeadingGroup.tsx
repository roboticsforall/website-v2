"use client";
import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { asText, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

interface ITopHeadingGroup extends FlexProps {
  heading: KeyTextField;
  subheading: RichTextField;
}

export const TopHeadingGroup = ({
  heading,
  subheading,
  ...flexProps
}: ITopHeadingGroup): JSX.Element => {
  return (
    <>
      {(heading || asText(subheading).trim().length != 0) && (
        <Flex direction="column" {...flexProps} gap={"1.25rem"} mb={"2.5rem"}>
          {heading && <CustomHeading as="h2">{heading}</CustomHeading>}
          <PrismicRichText field={subheading} />
        </Flex>
      )}
    </>
  );
};
