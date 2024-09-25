"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface CustomHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

export const CustomHeading = ({
  children,
  ...headingProps
}: CustomHeadingProps): JSX.Element => {
  switch (headingProps.as) {
    case "h1": {
      return (
        <Heading {...headingProps} size={{ base: "2xl", lg: "3xl" }}>
          {children}
        </Heading>
      );
    }
    case "h2": {
      return (
        <Heading {...headingProps} size="xl">
          {children}
        </Heading>
      );
    }
    case "h3":
      return (
        <Heading {...headingProps} size="lg">
          {children}
        </Heading>
      );
    case "h4":
      return (
        <Heading {...headingProps} size="md">
          {children}
        </Heading>
      );
    case "h5":
      return (
        <Heading {...headingProps} size="md">
          {children}
        </Heading>
      );
    case "h6":
      return (
        <Heading {...headingProps} size="sm">
          {children}
        </Heading>
      );
    default:
      return <Heading {...headingProps}>{children}</Heading>;
  }
};
