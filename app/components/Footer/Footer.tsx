"use client";

import {
    Box,
    Container,
    Flex,
    Grid,
    Icon,
    Link,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { BackgroundColor } from "../BackgroundColor";
import { CustomHeading } from "../CustomHeading";


interface FooterProps {
    //navbar_color?: string;
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
                            Robotics for All is a 501(c)(3) nonprofit that provides robotics education to children of all communities.
                        </Text>
                        <Stack direction="row" spacing={6}>
                            <Link href="https://facebook.com" isExternal>
                                <Icon as={EmailIcon} boxSize={5} />
                            </Link>
                            <Link href="https://twitter.com" isExternal>
                                <Icon as={EmailIcon} boxSize={5} />
                            </Link>
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
