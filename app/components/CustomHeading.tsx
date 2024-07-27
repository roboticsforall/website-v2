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
        <Heading {...headingProps} as="h1">
          {children}
        </Heading>
      );
    }
    case "h2": {
      return (
        <Heading {...headingProps} as="h2">
          {children}
        </Heading>
      );
    }
    case "h3":
      return (
        <Heading {...headingProps} as="h3">
          {children}
        </Heading>
      );
    case "h4":
      return (
        <Heading {...headingProps} as="h4">
          {children}
        </Heading>
      );
    case "h5":
      return (
        <Heading {...headingProps} as="h5">
          {children}
        </Heading>
      );
    case "h6":
      return (
        <Heading {...headingProps} as="h6">
          {children}
        </Heading>
      );
    default:
      return <Heading {...headingProps}>{children}</Heading>;
  }
};
