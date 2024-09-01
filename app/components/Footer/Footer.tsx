"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FooterNavigationDocument } from "@/prismicio-types";
import { CustomHeading } from "../CustomHeading";
import { PrismicRichText } from "@prismicio/react";
import { ContainerWrapper } from "../ContainerWrapper";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface FooterProps {
  footer: FooterNavigationDocument<string>;
}

export function Footer({ footer }: FooterProps) {
  return (
    <Box bg="primary.900" color="white">
      <ContainerWrapper>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 2.5fr" }} gap={"1.5rem"}>
          <GridItem>
            <Stack spacing={"2.5rem"}>
              <Flex align="center">
                <Box width="51px" height="51px">
                  <Link as={PrismicNextLink} href={"/"}>
                    <PrismicNextImage field={footer.data.company_logo} />
                  </Link>
                </Box>
                <CustomHeading as="h4" ml={2}>
                  {footer.data.name}
                </CustomHeading>
              </Flex>
              <Box maxW="50ch">
                <PrismicRichText field={footer.data.description} />
                <Button
                  mt={"1.5rem"}
                  variant="link"
                  size="lg"
                  fontSize={"1.25rem"}
                  color="white"
                  as={PrismicNextLink}
                  field={footer.data.donate_link}
                >
                  Donate <ExternalLinkIcon ml="1px" />
                </Button>
              </Box>
              <Stack direction="row" spacing={"2.5rem"}>
                {footer.data.social_links.map((item, s) => (
                  <Link as={PrismicNextLink} key={s} field={item.link}>
                    <PrismicNextImage field={item.icon} />
                  </Link>
                ))}
              </Stack>
            </Stack>
          </GridItem>
          <GridItem>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"2.5rem"}>
              {footer.data.slices.map(
                (navItem, i) =>
                  navItem.variation == "default" && (
                    <Stack key={navItem.primary.name} align={"flex-start"}>
                      <CustomHeading as="h5" mb={4} textTransform={"uppercase"}>
                        {navItem.primary.name}
                      </CustomHeading>
                      {navItem.primary.child_navigation.map(
                        (childNavItem, j) => (
                          <Link
                            as={PrismicNextLink}
                            key={j}
                            field={childNavItem.link}
                          >
                            {childNavItem.name}
                          </Link>
                        )
                      )}
                    </Stack>
                  )
              )}
              {footer.data.slices.filter(
                (item) => item.variation == "navigationSingleLink"
              ) ? (
                <Stack align={"flex-start"}>
                  <CustomHeading as="h5" mb={4} textTransform={"uppercase"}>
                    More on RFA
                  </CustomHeading>
                  {footer.data.slices.map(
                    (navItem, i) =>
                      navItem.variation == "navigationSingleLink" && (
                        <Link
                          as={PrismicNextLink}
                          key={navItem.primary.name}
                          field={navItem.primary.link}
                        >
                          {navItem.primary.name}
                        </Link>
                      )
                  )}
                </Stack>
              ) : (
                <></>
              )}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}
