import { Heading } from "@chakra-ui/react";

const Heading = (as: String): JSX.Element => {
  switch (as) {
    case "h1": {
      return <Heading as="h1">Heading 1</Heading>;
    }
    case "h2": {
      return <Heading as="h2">Heading 2</Heading>;
    }
    case "h3":
      return <Heading as="h3">Heading 3</Heading>;
    case "h4":
      return <Heading as="h4">Heading 4</Heading>;
    case "h5":
      return <Heading as="h5">Heading 5</Heading>;
    case "h6":
      return <Heading as="h6">Heading 6</Heading>;
  }
};
