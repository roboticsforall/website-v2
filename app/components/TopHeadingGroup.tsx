"use client";
import { Box } from "@chakra-ui/react";
import { KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

interface ITopHeadingGroup {
  heading: KeyTextField;
  subheading: RichTextField;
}

export const TopHeadingGroup = ({
  heading,
  subheading,
}: ITopHeadingGroup): JSX.Element => {
  return (
    <Box mb={5} textAlign="center">
      {heading && (
        <CustomHeading mb={"1.25rem"} as="h2">
          {heading}
        </CustomHeading>
      )}
      {subheading && <PrismicRichText field={subheading} />}
    </Box>
  );
};
