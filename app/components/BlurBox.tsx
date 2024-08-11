"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BlurBoxProps extends BoxProps {
  hasBlur: boolean;
  children: ReactNode;
}

export const BlurBox = ({ hasBlur, children, ...boxProps }: BlurBoxProps) => {
  return (
    <Box
      {...boxProps}
      {...(hasBlur
        ? {
            borderRadius: "md",
            p: "2.5rem",
            bgColor: "#FFFFFF99",
            textColor: "black",
            backdropFilter: "blur(4px)",
          }
        : {})}
    >
      {children}
    </Box>
  );
};
