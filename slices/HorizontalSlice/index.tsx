import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  Center,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
/**
 * Props for `HorizontalSlice`.
 */
export type HorizontalSliceProps =
  SliceComponentProps<Content.HorizontalSliceSlice>;

/**
 * Component for "HorizontalSlice" Slices.
 */
const HorizontalSlice = ({ slice }: HorizontalSliceProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.variation === "default" && <RightImage {...slice} />}
      {slice.variation === "leftImage" && <LeftImage {...slice} />}
      {slice.variation === "leftImageNoButton" && (
        <LeftImageNoButton {...slice} />
      )}
      {slice.variation === "rightImageNoButton" && (
        <RightImageNoButton {...slice} />
      )}
    </section>
  );
};

export default HorizontalSlice;

const LeftImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "leftImage"
          ? slice.primary.background_color
          : "white"
      }
    >
      <ContainerWrapper>
        <SimpleGrid columns={{ lg: 2 }} spacing={"1.5rem"}>
          <Box>
            <PrismicNextImage field={slice.primary.image} />
          </Box>
          <Stack justifyContent={"center"}>
            <Box>
              <Heading mb={"1.25rem"} as="h2">
                {slice.primary.title}
              </Heading>
              <Text>{slice.primary.description}</Text>

              <PrismicNextLink
                field={
                  slice.variation === "leftImage"
                    ? slice.primary.buttonlink
                    : null
                }
              >
                {slice.variation == "leftImage" && (
                  <Button
                    mt="2.5rem"
                    variant={
                      slice.primary.button_variation == "solid"
                        ? "solid"
                        : "outline"
                    }
                  >
                    {slice.variation === "leftImage"
                      ? slice.primary.buttontext
                      : ""}
                  </Button>
                )}
              </PrismicNextLink>
            </Box>
          </Stack>
        </SimpleGrid>
        {/* <Flex>
          <Image
            objectFit="cover"
            w={{ base: "100%", sm: "50%" }}
            h={{ base: "100vh", sm: "auto" }}
            maxH="100vh"
            src={slice.primary.image.url!}
            alt="RFA"
          />

          <Stack
            padding="3rem 1.5rem 3rem 1.5rem"
            justifyContent="center"
            spacing={1}
            p={{ base: 4, sm: 6 }}
            w={{ base: "100%", sm: "50%" }}
          >
            <Heading marginBottom={"1.25rem"} size="xl">
              {slice.primary.title}
            </Heading>

            <Text py="2">{slice.primary.description}</Text>

            <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop="2.5rem" variant="solid" colorScheme="blue">
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink>
          </Stack>
        </Flex> */}
      </ContainerWrapper>
    </BackgroundColor>
  );
};

const LeftImageNoButton = (
  slice: Content.HorizontalSliceSlice
): JSX.Element => {
  return (
    <Flex>
      <Image
        objectFit="cover"
        w={{ base: "100%", sm: "50%" }}
        h={{ base: "100vh", sm: "auto" }}
        maxH="100vh"
        src={slice.primary.image.url!}
        alt="RFA"
      />

      <Stack
        padding="3rem 1.5rem 3rem 1.5rem"
        justifyContent="center"
        spacing={1}
        p={{ base: 4, sm: 6 }}
        w={{ base: "100%", sm: "50%" }}
      >
        <Heading marginBottom={"1.25rem"} size="xl">
          {slice.primary.title}
        </Heading>

        <Text py="2">{slice.primary.description}</Text>

        {/* <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink> */}
      </Stack>
    </Flex>
  );
};

const RightImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return (
    <Flex>
      <Stack
        padding="3rem 1.5rem 3rem 1.5rem"
        justifyContent="center"
        spacing={1}
        p={{ base: 4, sm: 6 }}
        w={{ base: "100%", sm: "50%" }}
      >
        <Heading marginBottom={"1.25rem"} size="xl">
          {slice.primary.title}
        </Heading>

        <Text py="2">{slice.primary.description}</Text>

        <PrismicNextLink field={slice.primary.buttonlink}>
          <Button marginTop="2.5rem" variant="solid" colorScheme="blue">
            {slice.primary.buttontext}
          </Button>
        </PrismicNextLink>
      </Stack>
      <Image
        objectFit="cover"
        w={{ base: "100%", sm: "50%" }}
        h={{ base: "100vh", sm: "auto" }}
        maxH="100vh"
        src={slice.primary.image.url!}
        alt="RFA"
      />
    </Flex>
  );
};

const RightImageNoButton = (
  slice: Content.HorizontalSliceSlice
): JSX.Element => {
  return (
    <Flex>
      <Stack
        padding="3rem 1.5rem 3rem 1.5rem"
        justifyContent="center"
        spacing={1}
        p={{ base: 4, sm: 6 }}
        w={{ base: "100%", sm: "50%" }}
      >
        <Heading marginBottom={"1.25rem"} size="xl">
          {slice.primary.title}
        </Heading>

        <Text py="2">{slice.primary.description}</Text>

        {/* <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink> */}
      </Stack>
      <Image
        objectFit="cover"
        w={{ base: "100%", sm: "50%" }}
        h={{ base: "100vh", sm: "auto" }}
        maxH="100vh"
        src={slice.primary.image.url!}
        alt="RFA"
      />
    </Flex>
  );
};
