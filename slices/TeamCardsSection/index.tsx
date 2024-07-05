import { Box, Flex, Text } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";

/**
 * Props for `TeamCardsSection`.
 */
export type TeamCardsSectionProps =
  SliceComponentProps<Content.TeamCardsSectionSlice>;

/**
 * Component for "TeamCardsSection" Slices.
 */
const TeamCardsSection = ({ slice }: TeamCardsSectionProps): JSX.Element => {
  return (
    <Flex direction="column" py="8" color='black'>
      <Box mb="8" mt="8" px={4}>
        <h2 style={{
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '48px',
          textAlign: 'left',
          color: 'black',
        }}>
          {slice.primary.title}
        </h2>
      </Box>
      <Flex flexWrap="wrap" justifyContent="space-between" px="4" w="full" alignItems="center">
        {slice.primary.grid.map((item, i) => (
          <Box
            key={i}
            width="281px"
            height="343px"
            p="20px 21px"
            gap="10px"
            mb="10"
            borderRadius="8px 8px 8px 8px"
            border="2px solid #178BFF"
            display="flex"
            flexDirection="column"
            alignItems="left"
          >
            <Box
              width="239px"
              height="212px"
              display="flex"
            >
              <Image
                src={item.image.url!}
                alt={item.image.alt!}
                width={item.image.dimensions?.width}
                height={item.image.dimensions?.height}
                objectFit="cover"
                layout="fixed"
                style={{
                  borderRadius: "10px",
                }}
              />
            </Box>

            <Text fontWeight="bold" mb="4">
              {item.name}
            </Text>
            <Text mb="0">{item.title}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default TeamCardsSection;
