"use client";
import { Stack } from "@chakra-ui/react";
import { ITextBlock, TextBlock } from "@/app/components/TextBlock";
import {
  BottomButtonGroup,
  IButtonProps,
} from "@/app/components/BottomButtonGroup";

export const TextBlockBottomButtonGroup = ({
  textBlock,
  button_group,
}: ITextBlock & { button_group: IButtonProps[] }): JSX.Element => {
  return (
    <Stack gap={"2.5rem"}>
      <TextBlock textBlock={textBlock} />
      <BottomButtonGroup button_group={button_group} />
    </Stack>
  );
};
