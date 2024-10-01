"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { TriangleDownIcon } from "@chakra-ui/icons";

export function DesktopNav(navigation: GlobalNavigationDocument<string>) {
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Flex flex={1} justifyContent={"space-between"}>
        <HStack spacing={"1.5rem"}>
          <Link as={PrismicNextLink} href={"/"}>
            <PrismicNextImage field={navigation.data.logo} />
          </Link>
          {navigation.data.slices.map((navItem, i) =>
            navItem.variation == "default" ? (
              <Popover trigger="hover" key={i} placement={"bottom-start"}>
                <PopoverTrigger>
                  <Flex
                    borderWidth={3}
                    borderColor={"transparent"}
                    padding={1}
                    _hover={{
                      borderTopColor: "primary.900",
                    }}
                    alignItems={"center"}
                  >
                    <Text>{navItem.primary.name}</Text>
                    <TriangleDownIcon ml={1} color={"primary.900"} />
                  </Flex>
                </PopoverTrigger>
                <PopoverContent border="none">
                  {navItem.primary.child_navigation.map((childNavItem, j) => (
                    <Link
                      as={PrismicNextLink}
                      key={j}
                      _hover={{
                        bg: "primary.900",
                        textColor: "white",
                      }}
                      field={childNavItem.link}
                    >
                      <Box
                        p={4}
                        borderTopRadius={j == 0 ? "md" : "none"}
                        borderBottomRadius={
                          j == navItem.primary.child_navigation.length - 1
                            ? "md"
                            : "none"
                        }
                      >
                        <Text>{childNavItem.name}</Text>
                      </Box>
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            ) : (
              <Box
                key={i}
                borderWidth={3}
                borderColor={"transparent"}
                padding={1}
                _hover={{
                  borderTopColor: "primary.900",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                alignItems={"center"}
              >
                <PrismicNextLink field={navItem.primary.link}>
                  {navItem.primary.name}
                </PrismicNextLink>
                {/* <Link as={PrismicNextLink} field={navItem.primary.link}>
                  {navItem.primary.name}
                </Link> */}
              </Box>
            )
          )}
        </HStack>
      </Flex>
      <Flex justifyContent="end">
        <Button
          size="lg"
          as={PrismicNextLink}
          field={navigation.data.donate_link}
        >
          Donate
        </Button>
      </Flex>
    </Flex>
  );
}
