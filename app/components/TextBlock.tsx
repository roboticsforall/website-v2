"use client";
import { Box, Flex, FlexProps, Stack, StackProps } from "@chakra-ui/react";
import { asText, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

export interface ITextBlock {
  textBlock: RichTextField;
}

export const TextBlock = ({
  textBlock,
  ...flexProps
}: ITextBlock & StackProps): JSX.Element => {
  return (
    <>
      {asText(textBlock).trim().length != 0 && (
        <Stack {...flexProps} gap={"1.25rem"}>
          <PrismicRichText
            field={textBlock}
            components={{
              heading1: ({ children }) => (
                <CustomHeading as="h1">{children}</CustomHeading>
              ),
              heading2: ({ children }) => (
                <CustomHeading as="h2">{children}</CustomHeading>
              ),
              heading3: ({ children }) => (
                <CustomHeading as="h3">{children}</CustomHeading>
              ),
              heading4: ({ children }) => (
                <CustomHeading as="h4">{children}</CustomHeading>
              ),
              heading5: ({ children }) => (
                <CustomHeading as="h5">{children}</CustomHeading>
              ),
              heading6: ({ children }) => (
                <CustomHeading as="h6">{children}</CustomHeading>
              ),
            }}
          />
        </Stack>
      )}
    </>
  );
};
