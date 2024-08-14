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
import { FooterDocument } from "@/prismicio-types";
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import { BackgroundColor } from "../BackgroundColor";
import { CustomHeading } from "../CustomHeading";


interface FooterProps {
    footer: FooterDocument<string>;
}

//footer: GlobalNavigationDocument<string>
export function Footer({ footer }: FooterProps) {
//export function Footer() {
    return (
        <Box bg="#00478F">
            <Container py={12} size={[null, "sm", "md", "lg", "xl", "2xl"]}>
                <Grid templateColumns={{ base: "1fr", lg: "2fr 2.5fr" }} gap="1.5rem">

                    {/* First Column */}
                    
                        <Stack spacing={6}>
                            <Flex align="center">
                                <Box width="51px" height="51px">
                                 <Link as={PrismicNextLink} href={"/"}>
                                 <Box as="img" src="https://images.prismic.io/rfa-cms/ZqCNth5LeNNTxcXA_TobyLogoFINAL-1-.png?auto=format%2Ccompress&w=640&fit=max" alt="Logo" width="51px" height="51px" />
                                </Link>
                                </Box>
                                <CustomHeading as="h4" ml={2}>Robotics For All</CustomHeading>
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
                    
                    {/* Second Column */}
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} >
                        <Stack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" mb={4}>About</Text>
                            <Link href={'#'}>Meet the team</Link>
                            <Link href={'#'}>Partners</Link>
                            <Link href={'#'}>Contact us</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" mb={4}>Programs</Text>
                            <Link href={'#'}>Individual learners</Link>
                            <Link href={'#'}>Schools & Partners</Link>
                            <Link href={'#'}>High school chapters</Link>
                        </Stack>
                        <Stack align={'flex-start'}>
                            <Text fontSize="lg" fontWeight="bold" mb={4}>Volunteer</Text>
                            <Link href={'#'}>Presidential Award</Link>
                            <Link href={'#'}>Guidestar</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                        </Stack>
                    </SimpleGrid>
                </Grid>
            </Container>
        </Box>
    );
}
