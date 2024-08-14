"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

export interface IColumnCardProps {
  image: ImageField;
  title: KeyTextField;
  description: RichTextField;
  button_text: KeyTextField;
  button_link: LinkField;
  link_text: KeyTextField;
  link: LinkField;
  has_link: boolean;
  has_image: boolean;
  has_button: boolean;
}

export const ColumnCard = (props: IColumnCardProps): JSX.Element => {
  return (
    <Card h="100%" variant={"outline"} borderWidth={1.5}>
      {props.has_image && (
        <CardHeader>
          <Box as={PrismicNextImage} borderRadius={"md"} field={props.image} />
        </CardHeader>
      )}
      <CardBody>
        <CustomHeading as="h4" mb={5}>
          {props.title}
        </CustomHeading>
        <PrismicRichText field={props.description} />
      </CardBody>
      {(props.has_link || props.has_button) && (
        <CardFooter>
          <ButtonGroup spacing="1rem">
            {props.has_button && (
              <Button
                variant="solid"
                as={PrismicNextLink}
                field={props.button_link}
              >
                {props.button_text}
              </Button>
            )}
            {props.has_link && (
              <Button variant="link" as={PrismicNextLink} field={props.link}>
                {props.link_text}
              </Button>
            )}
          </ButtonGroup>
        </CardFooter>
      )}
    </Card>
  );
};
