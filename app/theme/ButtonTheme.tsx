import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const outline = defineStyle({
  borderWidth: 2,
});

export const buttonTheme = defineStyleConfig({
  variants: { outline },
});
