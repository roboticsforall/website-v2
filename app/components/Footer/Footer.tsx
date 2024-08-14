"use client";

import {
    Box,
    Container,
    Flex,
    Grid,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { BackgroundColor } from "../BackgroundColor";
import { CustomHeading } from "../CustomHeading";
import { PrismicRichText } from "@prismicio/react";


interface FooterProps {
    footer: GlobalNavigationDocument<string>;
}

export function Footer({ footer }: FooterProps) {
    return (
        <Box bg="primary.900">
            <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
                <Grid templateColumns={{ base: "1fr", lg: "2fr 2.5fr" }} gap="1.5rem">
                    <Stack spacing={6}>
                        <Flex align="center">
                            <Box width="51px" height="51px">
                                <Link as={PrismicNextLink} href={"/"}>
                                    <PrismicNextImage field={footer.data.logo} />
                                </Link>
                            </Box>
                            <CustomHeading as="h4" ml={2}>{footer.data.name}</CustomHeading>
                        </Flex>
                        <Text fontSize="sm" maxW={300}>
                            <PrismicRichText field={footer.data.description} />
                        </Text>
                        <Stack direction="row" spacing={6}>
                            {footer.data.social_links.map((item, s) => (
                                <Link as={PrismicNextLink} key={s} field={item.link}>
                                    <PrismicNextImage field={item.icon} />
                                </Link>
                            ))}
                        </Stack>
                    </Stack>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} >
                        {footer.data.slices.map((navItem, i) =>
                            navItem.variation == "default" ? (
                                <Stack align={'flex-start'}>
                                    <Text fontSize="lg" fontWeight="bold" mb={4}>{navItem.primary.name}</Text>
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
                                            <Text>{childNavItem.name}</Text>
                                        </Link>
                                    ))}
                                </Stack>
                            ) : ""
                        )}
                    </SimpleGrid>
                </Grid>
            </Container>
        </Box>
    );
}
