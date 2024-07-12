import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  Text,
  Divider,
  Box,
  ButtonGroup,
  CardFooter,
  Flex,
  Container,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `Theming`.
 */
export type ThemingProps = SliceComponentProps<Content.ThemingSlice>;

/**
 * Component for "Theming" Slices.
 */
const Theming = ({ slice }: ThemingProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Heading as="h1" size="4xl">
        Heading 1
      </Heading>
      <Heading as="h2" size="2xl">
        Heading 2
      </Heading>
      <Heading as="h3" size="xl">
        Heading 3
      </Heading>
      <Heading as="h4" size="md">
        Heading 4
      </Heading>
      <Heading as="h5" size="sm">
        Heading 5
      </Heading>
      <Heading as="h6" size="xs">
        Heading 6
      </Heading>

      <Box position="relative" padding="10">
        <Divider />
      </Box>

      <Button variant="solid">Press Me</Button>
      <Button variant="outline">Press Me</Button>
      <Button variant="ghost">Press Me</Button>
      <Button variant="link">Press Me</Button>
      <Button isDisabled>Press Me</Button>
      <Button isActive>Press Me</Button>

      <Box position="relative" padding="10">
        <Divider />
      </Box>

      <Box bg={"primary.100"}>
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
          <Heading mb={5} textAlign="center" as="h2">
            Two Columns
          </Heading>
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {[1, 2].map(() => (
              <Box flexGrow={1} width={{ md: "calc(50% - 1.5rem)" }}>
                <Card>
                  <CardHeader>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width="200"
                      height="200"
                      style={{ objectFit: "cover" }}
                      alt="Green double couch with wooden legs"
                    />
                  </CardHeader>
                  <CardBody>
                    <Heading as="h4" size="md" mb={5}>
                      Letter from the President
                    </Heading>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum cumque, fuga nisi delectus distinctio obcaecati ea
                      architecto amet maxime esse inventore, molestias quasi in
                      quis earum repellat repudiandae nobis ipsum.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button variant={"outline"}>Buy now</Button>
                      <Button variant="link" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </Flex>
          <Center mt={"2.5rem"}>
            <Button>Contact Us</Button>
          </Center>
        </Container>
      </Box>
      <Box bgGradient="linear-gradient(70deg, rgba(224,255,238,1) 15%, rgba(159,225,251,1) 46%, rgba(104,172,255,1) 100%)">
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
          <Heading mb={5} textAlign="center" as="h2">
            Three Columns
          </Heading>
          <Flex gap={6} wrap="wrap" justifyContent={"center"}>
            {[1, 2, 3, 4, 5].map(() => (
              <Box
                width={{
                  sm: "calc(50% - 1.5rem * 2/3)",
                  lg: "calc(33.33333% - 1.5rem * 2/3)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
                }}
              >
                <Card>
                  <CardHeader>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width="1770"
                      height="1180"
                      style={{ objectFit: "cover" }}
                      alt="Green double couch with wooden legs"
                    />
                  </CardHeader>
                  <CardBody>
                    <Heading as="h4" size="md" mb={5}>
                      Letter from the President
                    </Heading>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum cumque, fuga nisi delectus distinctio obcaecati ea
                      architecto amet maxime esse inventore, molestias quasi in
                      quis earum repellat repudiandae nobis ipsum.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button>Buy now</Button>
                      <Button variant="link" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </Flex>
          <Center mt={"2.5rem"}>
            <Button>Contact Us</Button>
          </Center>
        </Container>
      </Box>
      <Box bg={"primary.500"}>
        <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
          <Heading mb={5} textAlign="center" as="h2">
            Four Columns
          </Heading>
          <Flex gap={6} wrap="wrap">
            {[1, 2, 3, 4].map(() => (
              <Box
                width={{
                  md: "calc(50% - 1.5rem * 1/2)",
                  lg: "calc(25% - 1.5rem * 3/4)", // Used to maintain width when gap is 6 (card width - 2/3 * gap width)
                }}
              >
                <Card variant={"outlined"}>
                  <CardHeader>
                    <Image
                      src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      width="1770"
                      height="1180"
                      style={{ objectFit: "cover" }}
                      alt="Green double couch with wooden legs"
                    />
                  </CardHeader>
                  <CardBody>
                    <Heading as="h4" size="md" mb={5}>
                      Letter from the President
                    </Heading>
                    <Text>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laborum cumque, fuga nisi delectus distinctio obcaecati ea
                      architecto amet maxime esse inventore, molestias quasi in
                      quis earum repellat repudiandae nobis ipsum.
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button>Buy now</Button>
                      <Button variant="link" colorScheme="blue">
                        Add to cart
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              </Box>
            ))}
          </Flex>
          <Center mt={"2.5rem"}>
            <Button>Contact Us</Button>
          </Center>
        </Container>
      </Box>
    </section>
  );
};

export default Theming;
