// 'use client';

// import {Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Input, VStack, useDisclosure, Text,
// } from "@chakra-ui/react";

// export const StyledPopOutBox = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Button onClick={onOpen} colorScheme="blue">
//         Open Pop-Out Box
//       </Button>

//       <Modal isOpen={isOpen} onClose={onClose} isCentered>
//         <ModalOverlay />
//         <ModalContent
//           bgGradient="linear(to-r, teal.100,blue.300)"
//           color="black"
//           borderRadius="20px"
//           textAlign="center"
//           padding="30px"
//           maxWidth="500px"
//         >
//           <ModalCloseButton color="black" />
//           <ModalHeader fontSize="24px" fontWeight="bold" fontFamily="'Be Vietnam Pro', sans-serif">
//             Our Newsletter
//           </ModalHeader>
//           <ModalBody>
//             <VStack spacing="4" align="center" textAlign="center">
//                 <Text fontSize="lg" mb="2">
//                   Sign up for the Robotics For All Newsletter!
//                 </Text>
//                 <Text fontSize="sm" mb="6">
//                   Go ahead and provide your contact information below, and we will reach out to you!
//                 </Text>

//                 <VStack spacing="4" width="full" align="flex-start">
//                   <Input
//                     placeholder="Email address"
//                     bg="white"
//                     color="black"
//                     borderRadius="10px"
//                     _placeholder={{ color: "gray.500" }}
//                   />
//                   <Input
//                     placeholder="First name"
//                     bg="white"
//                     color="black"
//                     borderRadius="10px"
//                     _placeholder={{ color: "gray.500" }}
//                   />
//                 </VStack>
//             </VStack>
//           </ModalBody>
//           <ModalFooter justifyContent="center">
//             <Button
//               bg="blue.500"
//               color="white"
//               _hover={{ bg: "blue.600" }}
//               borderRadius="20px"
//               px="8"
//               onClick={onClose}
//             >
//               SIGN UP NOW
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default StyledPopOutBox;

