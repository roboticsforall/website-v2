import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Center } from "@chakra-ui/react";
import { PrismicNextLink } from "@prismicio/next";
/**
 * Props for `FiftyFifty`.
 */
export type FiftyFiftyProps = SliceComponentProps<Content.FiftyFiftySlice>;

/**
 * Component for "FiftyFifty" Slices.
 */
const FiftyFifty = ({ slice }: FiftyFiftyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden'>
        <Image
          objectFit='cover'
          w={{ base: '100%', sm: '50%' }}
          h={{ base: '50vh', sm: 'auto' }}
          maxH='100vh'
          src={slice.primary.image.url!}
          alt='RFA'
        />

        <Stack
          padding='3rem 1.5rem 3rem 1.5rem'
          justifyContent='center'
          spacing={1}
          p={{ base: 4, sm: 6 }}
          w={{ base: '100%', sm: '50%' }}
        >
          <Heading marginBottom={'1.25rem'} size='xl'>{slice.primary.title}</Heading>

          <Text py='2'>{slice.primary.description}</Text>

          <CardFooter padding='0px'>
            <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink>
          </CardFooter>
        </Stack>
      </Card>
    </section>
  );
};

export default FiftyFifty;
