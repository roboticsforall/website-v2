"use client";
import { Button, ButtonGroup, Center } from "@chakra-ui/react";
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
}: {
  button_group: IButtonProps[];
}): JSX.Element => {
  return (
    <>
      {button_group.length > 0 ? (
        <Center mt={"2.5rem"}>
          <ButtonGroup spacing="1.25rem">
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
          </ButtonGroup>
        </Center>
      ) : (
        <></>
      )}
    </>
  );
};
