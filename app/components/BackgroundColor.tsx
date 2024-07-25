"use client";
import { Box, BoxProps } from "@chakra-ui/react";

enum backgroundColorOptions {
  PRIMARY = "primary.100",
  SECONDARY = "primary.500",
  GRADIENT = "linear-gradient(70deg, rgba(224,255,238,1) 15%, rgba(159,225,251,1) 46%, rgba(104,172,255,1) 100%)",
  DEFAULT = "white",
}

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
        <Box
          {...boxProps}
          textColor="white"
          bg={backgroundColorOptions.SECONDARY}
        >
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
