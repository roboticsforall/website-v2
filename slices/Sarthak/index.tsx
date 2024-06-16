"use client";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Box, Flex, Spacer, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button } from "@chakra-ui/react";
/**
 * Props for `Sarthak`.
 */
export type SarthakProps = SliceComponentProps<Content.SarthakSlice>;

/**
 * Component for "Sarthak" Slices.
 */
const Sarthak = ({ slice }: SarthakProps): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex>
      <Box flex="1" >
        <h1>GUESS!!! - {slice.primary.ezampledate}</h1><br/>
        <p>My favorite color is {slice.primary.color}</p>
        <p>Do you think this is true or false?</p>
        <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Check!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {slice.primary.color} is my favorite color: {slice.primary.examplebool}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
    </Flex>
  );
};

export default Sarthak;
