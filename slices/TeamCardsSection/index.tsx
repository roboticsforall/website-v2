import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { Box, Card, CardBody, CardHeader, Center, Container, Grid, Heading, Text } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `TeamCardsSection`.
 */
export type TeamCardsSectionProps =
  SliceComponentProps<Content.TeamCardsSectionSlice>;

/**
 * Component for "TeamCardsSection" Slices.
 */
const TeamCardsSection = ({ slice }: TeamCardsSectionProps): JSX.Element => {
  return (
    <BackgroundColor
      backgroundColor={
        slice.variation === "default" ? slice.primary.backgroundcolor : "white"
      }
    >
      <ContainerWrapper >
        <Box py={8} color="black">
          <Heading as="h3" size="xl">
            {slice.primary.title}
          </Heading>
        </Box>
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }}
          gap={6}
          justifyContent="space-between"
          alignItems="center"
        >
          {slice.primary.grid.map((item, i) => (
            <Card
              key={i}
              h="100%"
              variant="filled"
              bg="none"
              color="black"
              borderRadius="8px"
              border="1px solid #178BFF"
            >
              <CardHeader mb={0}>
                <Center >
                  <Box
                    width="239px"
                    height="212px"
                    display="flex"
                  >
                    <Image
                      src={item.image.url!}
                      alt={item.image.alt!}
                      width={item.image.dimensions?.width}
                      height={item.image.dimensions?.height}
                      objectFit="cover"
                      layout="fixed"
                      style={{
                        borderRadius: "10px",
                      }}
                    /></Box>
                </Center>
              </CardHeader>
              <CardBody>
                <Box alignContent="center">
                  <Text fontWeight="bold" mb="4">
                    {item.name}
                  </Text>
                  <Text mb="0">
                    {item.title}
                  </Text>
                </Box>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default TeamCardsSection;
