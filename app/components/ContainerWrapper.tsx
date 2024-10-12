"use client";
import { Container, ContainerProps } from "@chakra-ui/react";
import { ReactNode, forwardRef } from "react";

interface ContainerWrapperProps extends ContainerProps {
  children: ReactNode;
}

// Use forwardRef to allow ref passing
export const ContainerWrapper = forwardRef<
  HTMLDivElement,
  ContainerWrapperProps
>(({ children, py = 12, ...containerProps }, ref) => {
  return (
    <Container
      {...containerProps}
      py={py}
      size={[null, "sm", "md", "lg", "xl", "2xl"]}
      ref={ref} // Forward the ref to the underlying Container
    >
      {children}
    </Container>
  );
});

// Set the display name for better debugging
ContainerWrapper.displayName = "ContainerWrapper";
