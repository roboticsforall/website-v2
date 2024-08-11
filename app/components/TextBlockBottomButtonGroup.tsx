"use client";
import { Stack, StackProps } from "@chakra-ui/react";
import { ITextBlock, TextBlock } from "@/app/components/TextBlock";
import {
  BottomButtonGroup,
  IButtonProps,
} from "@/app/components/BottomButtonGroup";

export const TextBlockBottomButtonGroup = ({
  textBlock,
  button_group,
  ...stackProps
}: ITextBlock & { button_group: IButtonProps[] } & StackProps): JSX.Element => {
  return (
    <Stack {...stackProps} gap={"2.5rem"}>
      <TextBlock textBlock={textBlock} />
      <BottomButtonGroup {...stackProps} button_group={button_group} />
    </Stack>
  );
};
