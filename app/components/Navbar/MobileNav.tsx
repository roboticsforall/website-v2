"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Box, Button, Flex, IconButton, Link, Text, useDisclosure } from "@chakra-ui/react";

import * as Drawer from "@chakra-ui/react/drawer";
import * as Accordion from "@chakra-ui/react/accordion";

import { GlobalNavigationDocument } from "@/prismicio-types";
import {
  HamburgerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";

export function MobileNav(navigation: GlobalNavigationDocument<string>) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Top Bar */}
      <Flex justifyContent="space-between" alignItems="center">
        <Link as={PrismicNextLink} href={"/"}>
          <PrismicNextImage field={navigation.data.logo} />
        </Link>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          icon={<HamburgerIcon boxSize={6} />}
          aria-label="Open menu"
        />
      </Flex>

      {/* Drawer */}
      <Drawer.Root open={open} onClose={onClose} placement="right" size="full">
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.CloseButton />
          </Drawer.Header>

          <Drawer.Body>
            {/* Donate button */}
            <Button
              my={6}
              w="full"
              size="lg"
              onClick={onClose}
              as={PrismicNextLink}
              field={navigation.data.donate_link}
            >
              Donate
            </Button>

            {/* Navigation Accordion */}
            <Accordion.Root allowMultiple>
              {navigation.data.slices.map((navItem, i) =>
                navItem.variation === "default" ? (
                  <Accordion.Item key={i}>
                    {({ isOpen }: { isOpen: boolean }) => (
                      <>
                        <Accordion.Button _expanded={{ fontWeight: "bold" }}>
                          <Box flex="1" textAlign="left">
                            <Text>{navItem.primary.name}</Text>
                          </Box>
                          {isOpen ? (
                            <TriangleUpIcon ml={1} color="primary.900" />
                          ) : (
                            <TriangleDownIcon ml={1} color="primary.900" />
                          )}
                        </Accordion.Button>

                        {navItem.primary.child_navigation.map((childNavItem, j) => (
                          <Accordion.Panel pb={4} key={j}>
                            <Link
                              onClick={onClose}
                              as={PrismicNextLink}
                              textAlign="left"
                              field={childNavItem.link}
                            >
                              <Box>
                                <Text>{childNavItem.name}</Text>
                              </Box>
                            </Link>
                          </Accordion.Panel>
                        ))}
                      </>
                    )}
                  </Accordion.Item>
                ) : (
                  <Accordion.Item key={i}>
                    <Accordion.Button>
                      <Link
                        w="100%"
                        as={PrismicNextLink}
                        field={navItem.primary.link}
                      >
                        <Flex justify="space-between" alignItems="center">
                          <Text>{navItem.primary.name}</Text>
                        </Flex>
                      </Link>
                    </Accordion.Button>
                  </Accordion.Item>
                )
              )}
            </Accordion.Root>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
}
