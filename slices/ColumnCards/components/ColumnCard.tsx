import {
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Text,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { Simplify } from "@/prismicio-types";
import { CustomHeading } from "@/app/components/CustomHeading";

export const ColumnCard = ({
  item,
}: {
  item: Simplify<Content.ColumnCardsSliceDefaultPrimaryCardsItem>;
}): JSX.Element => {
  return (
    <Card h="100%" variant={"outline"} borderWidth={1.5}>
      {item.hasimage && (
        <CardHeader>
          <PrismicNextImage
            field={item.image}
            width={item.image.dimensions?.width}
            height={item.image.dimensions?.height}
          />
        </CardHeader>
      )}
      <CardBody>
        <CustomHeading as="h4" mb={5}>
          {item.title}
        </CustomHeading>
        <Text>
          <PrismicRichText field={item.description} />
        </Text>
      </CardBody>
      {(item.haslink || item.hasbutton) && (
        <CardFooter>
          <ButtonGroup spacing="1.5rem">
            {item.hasbutton && <Button>{item.button_text}</Button>}
            {item.haslink && (
              <Button variant="link" as={PrismicNextLink} field={item.link}>
                {item.link_text}
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      )}
    </Card>
  );
};
