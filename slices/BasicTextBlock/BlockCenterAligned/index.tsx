import { Button, Text, Center, Flex} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { BackgroundColor } from "@/app/components/BackgroundColor";


const BlockCenterAligned = (
    slice: Content.BasicTextBlockSlice
    ): JSX.Element => {
    return (
        <BackgroundColor
        backgroundColor={
          slice.variation === "blockCenterAligned"
            ? slice.primary.backgroundcolor
            : "white"
        }
      >
        <ContainerWrapper>
            <Flex direction={"column"} p={{base: "1.25rem", md: "4rem"}}>
                <CustomHeading as="h2" size="2xl" mb={"1.5rem"} textAlign={"center"}>
                    {slice.primary.title}
                </CustomHeading>
                <CustomHeading as="h3" size="xl" mb={"1.5rem"} textAlign={"center"}>
                    {slice.primary.subtitle}
                </CustomHeading>
                <Text mb={"2.5rem"} textAlign={"center"}>
                    <PrismicRichText field={slice.primary.description} />
                </Text>
                <Center >
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
                </Center>
            </Flex>
        </ContainerWrapper>
    </BackgroundColor>
    
    );
};

export default BlockCenterAligned;
