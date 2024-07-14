import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import {Container, Flex} from "@chakra-ui/react"
import { Card, Image, Stack, CardBody, Heading, Text, CardFooter, Button, Center } from "@chakra-ui/react";
import { PrismicNextLink } from "@prismicio/next";
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
      <div style={{padding: '3rem', height:'100%'}}>
        {slice.variation=='default' ? <RightImage {...slice}/> : <span></span>}
        {slice.variation=='leftImage' ? <LeftImage {...slice}/> : <span></span>}
        {slice.variation=='leftImageNoButton' ? <LeftImageNoButton {...slice}/> : <span></span>}
        {slice.variation=='rightImageNoButton' ? <RightImageNoButton {...slice}/> : <span></span>}
        
      </div>
    </section>
  );
};

export default HorizontalSlice;

const LeftImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return(
    <Flex>
        <Image
          objectFit='cover'
          w={{ base: '100%', sm: '50%' }}
          h={{ base: '100vh', sm: 'auto' }}
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

            <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink>
        </Stack>
        </Flex>
  )
}

const LeftImageNoButton = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return(
    <Flex>
        <Image
          objectFit='cover'
          w={{ base: '100%', sm: '50%' }}
          h={{ base: '100vh', sm: 'auto' }}
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

            {/* <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink> */}
        </Stack>
        </Flex>
  )
}

const RightImage = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return(
    <Flex>


        <Stack
                  padding='3rem 1.5rem 3rem 1.5rem'
                  justifyContent='center'
                  spacing={1}
                  p={{ base: 4, sm: 6 }}
                  w={{ base: '100%', sm: '50%' }}
        >
          <Heading marginBottom={'1.25rem'} size='xl'>{slice.primary.title}</Heading>

          <Text py='2'>{slice.primary.description}</Text>

            <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink>
        </Stack>
        <Image
          objectFit='cover'
          w={{ base: '100%', sm: '50%' }}
          h={{ base: '100vh', sm: 'auto' }}
          maxH='100vh'
          src={slice.primary.image.url!}
          alt='RFA'
        />
        </Flex>
  )
}


const RightImageNoButton = (slice: Content.HorizontalSliceSlice): JSX.Element => {
  return(
    <Flex>


        <Stack
                  padding='3rem 1.5rem 3rem 1.5rem'
                  justifyContent='center'
                  spacing={1}
                  p={{ base: 4, sm: 6 }}
                  w={{ base: '100%', sm: '50%' }}
        >
          <Heading marginBottom={'1.25rem'} size='xl'>{slice.primary.title}</Heading>

          <Text py='2'>{slice.primary.description}</Text>

            {/* <PrismicNextLink field={slice.primary.buttonlink}>
              <Button marginTop='2.5rem' variant='solid' colorScheme='blue'>
                {slice.primary.buttontext}
              </Button>
            </PrismicNextLink> */}
        </Stack>
        <Image
          objectFit='cover'
          w={{ base: '100%', sm: '50%' }}
          h={{ base: '100vh', sm: 'auto' }}
          maxH='100vh'
          src={slice.primary.image.url!}
          alt='RFA'
        />
        </Flex>
  )
}