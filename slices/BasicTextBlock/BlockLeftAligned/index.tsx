import {Box, Button, Text, Flex} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import {  PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { BackgroundColor } from "@/app/components/BackgroundColor";


const BlockLeftAligned = (
    slice: Content.BasicTextBlockSlice
    ): JSX.Element => {
    return (

        <BackgroundColor
        backgroundColor={
          slice.variation === "blockLeftAligned"
            ? slice.primary.backgroundcolor
            : "white"
        }
      >
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
              
                    {slice.primary.buttons.map((item, index) => (
                          <Box key={index}>
                            <Button
                                as={PrismicNextLink}
                                field={item.button_solid}
                                variant='solid'
                                
                            >
                                {item.button_text}
                            </Button>
                            <Button
                                as={PrismicNextLink}
                                field={item.button_outlined}
                                variant='outline'
                                mx={'1.25rem'}
                            >
                                {item.button_text}
                            </Button>
                    </Box>
 
                    ))}
                
            </Flex>
        </ContainerWrapper>
    </BackgroundColor>
    
);
};

export default BlockLeftAligned;
