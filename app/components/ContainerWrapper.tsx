"use client";
import { Container, ContainerProps } from "@chakra-ui/react";

interface ContainerWrapperProps extends ContainerProps {
  children: React.ReactNode;
}

export const ContainerWrapper = ({
  children,
  ...containerProps
}: ContainerWrapperProps) => {
  return (
    <Container
      {...containerProps}
      py={12}
      size={[null, "sm", "md", "lg", "xl", "2xl"]}
    >
      {children}
    </Container>
  );
};
