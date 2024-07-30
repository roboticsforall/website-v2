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
                
                    {slice.primary.buttons.map((item, index) => (
                        <Center key={index}>
                            <Button
                                key={index}
                                as={PrismicNextLink}
                                field={item.button_outlined}
                                variant='solid'
                                
                            >
                                {item.button_text}
                            </Button>
                            <Button
                            key={index}
                            as={PrismicNextLink}
                            field={item.button_outlined}
                            variant='outline'
                            mx={'1.25rem'}
                        >
                            {item.button_text}
                        </Button>
                    </Center>
                    ))}
                    
    

                
            </Flex>
        </ContainerWrapper>
    </BackgroundColor>
    
    );
};

export default BlockCenterAligned;
