"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { backgroundColorOptions } from "./background_options";

interface BackgroundColorProps extends BoxProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export const BackgroundColor = ({
  children,
  backgroundColor,
  ...boxProps
}: BackgroundColorProps) => {
  switch (backgroundColor) {
    case "primary": {
      return (
        <Box {...boxProps} bg={backgroundColorOptions.PRIMARY}>
          {children}
        </Box>
      );
    }
    case "secondary": {
      return (
        <Box {...boxProps} bg={backgroundColorOptions.SECONDARY}>
          {children}
        </Box>
      );
    }
    case "gradient":
      return (
        <Box {...boxProps} bgGradient={backgroundColorOptions.GRADIENT}>
          {children}
        </Box>
      );
    default:
      return <Box {...boxProps}>{children}</Box>;
  }
};
