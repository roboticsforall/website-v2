"use client";
import {
  Button,
  ButtonGroup,
  Center,
  Stack,
  StackProps,
} from "@chakra-ui/react";
import { GroupField, KeyTextField, LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect } from "react";

export interface IButtonProps {
  button_text: KeyTextField;
  button_link: LinkField;
  button_variation: string;
}

export const BottomButtonGroup = ({
  button_group,
  ...stackProps
}: {
  button_group: IButtonProps[];
} & StackProps): JSX.Element => {
  return (
    <>
      {button_group.length > 0 ? (
        <Stack
          {...stackProps}
          flexDirection={{ base: "column", sm: "row" }}
          gap="1.25rem"
        >
          {button_group.map((item, i) => (
            <Button
              key={i}
              variant={item.button_variation}
              as={PrismicNextLink}
              field={item.button_link}
            >
              {item.button_text}
            </Button>
          ))}
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
};
