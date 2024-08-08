"use client";
import { Container, ContainerProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerWrapperProps extends ContainerProps {
  children: ReactNode;
}

export const ContainerWrapper = ({
  children,
  py = 12,
  ...containerProps
}: ContainerWrapperProps) => {
  return (
    <Container
      {...containerProps}
      py={py}
      size={[null, "sm", "md", "lg", "xl", "2xl"]}
    >
      {children}
    </Container>
  );
};
