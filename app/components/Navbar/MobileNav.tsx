"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { GlobalNavigationDocument } from "@/prismicio-types";
import {
  ArrowForwardIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";

export function MobileNav(navigation: GlobalNavigationDocument<string>) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex justifyContent={"space-between"} alignItems="center">
        <Link as={PrismicNextLink} href={"/"}>
          <PrismicNextImage
            width={"50"}
            height={"50"}
            field={navigation.data.logo}
          />
        </Link>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          icon={<HamburgerIcon boxSize={6} />}
          aria-label="Options"
        />
      </Flex>
      <Drawer
        size={"full"}
        placement={"right"}
        onClose={onClose}
        isOpen={isOpen}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <DrawerCloseButton />
          </DrawerHeader>
          <DrawerBody>
            {navigation.data.donate_button_variation === "solid" ? (
              <Button my={6} w="full" size={"lg"}>
                Donate
              </Button>
            ) : (
              <Button variant={"outline"} my={6} w="full" size={"lg"}>
                Donate
              </Button>
            )}
            <Accordion allowMultiple>
              {navigation.data.slices.map((navItem, i) =>
                navItem.variation == "default" ? (
                  <AccordionItem key={i}>
                    <AccordionButton _expanded={{ fontWeight: "bold" }}>
                      <Box flex="1" textAlign={"left"}>
                        <Text>{navItem.primary.name}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    {navItem.primary.child_navigation.map((childNavItem, j) => (
                      <AccordionPanel pb={4} key={j}>
                        <Link
                          onClick={onClose}
                          as={PrismicNextLink}
                          textAlign={"left"}
                          field={childNavItem.link}
                        >
                          <Box>
                            <Text>{childNavItem.name}</Text>
                          </Box>
                        </Link>
                      </AccordionPanel>
                    ))}
                  </AccordionItem>
                ) : (
                  <AccordionItem key={i}>
                    <AccordionButton>
                      <Link
                        w="100%"
                        as={PrismicNextLink}
                        field={navItem.primary.link}
                      >
                        <Flex justify={"space-between"} alignItems={"center"}>
                          <Text>{navItem.primary.name}</Text>
                        </Flex>
                      </Link>
                    </AccordionButton>
                  </AccordionItem>
                )
              )}
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
