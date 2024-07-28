import {Box, Button, Text, Flex} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import {  PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";


const BlockLeftAligned = (
    slice: Content.BasicTextBlockSlice
    ): JSX.Element => {
    return (

    <Box>
        <ContainerWrapper>
            <Flex direction={"column"} p={{base: "1.25rem", md: "4rem"}}>
                <CustomHeading as="h2" size="2xl" mb={"1.5rem"}>
                    {slice.primary.title}
                </CustomHeading>
                <CustomHeading as="h3" size="xl" mb={"1.5rem"}>
                    {slice.primary.subtitle}
                </CustomHeading>

                <Text mb={"2.5rem"}>
                    <PrismicRichText field={slice.primary.description} />
                </Text>
                <Box>
                    <PrismicNextLink field={slice.primary.button_solid} >
                        <Button variant="solid" mr={"6"}>
                            {slice.primary.buttonText}
                        </Button>
                    </PrismicNextLink>

                    <PrismicNextLink field={slice.primary.button_outlined}>
                        <Button variant="outline">
                            {slice.primary.buttonText}
                        </Button>
                    </PrismicNextLink>
                </Box>
            </Flex>
        </ContainerWrapper>
    </Box>
    
);
};

export default BlockLeftAligned;
