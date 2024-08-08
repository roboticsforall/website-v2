"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { backgroundColorOptions } from "./background_options";
import blueSwoosh from "../media/blue_swoosh.svg";
import Image from "next/image";

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
          textColor={"white"}
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
    case "swoosh":
      return (
        <Box
          {...boxProps}
          bgImage={`url(${blueSwoosh.src})`}
          bgRepeat="no-repeat"
          bgPosition={"bottom"}
          backgroundSize={"cover"}
          bgColor={backgroundColorOptions.PRIMARY}
        >
          {children}
        </Box>
      );
    default:
      return <Box {...boxProps}>{children}</Box>;
  }
};
