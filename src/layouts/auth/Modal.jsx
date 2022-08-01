import { EmailIcon } from "@chakra-ui/icons";
import {
  InputLeftElement, 
  InputGroup, 
  Button,
  Input, 

  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  Modal,
} from "@chakra-ui/react";

const AuthModal = props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader textAlign="center">
        {props.heading}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody pb={6}>
        <form onSubmit={props.handleSubmit}>
          <InputGroup mt={4}>
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.500" />
            </InputLeftElement>
            <Input placeholder="Email" />
          </InputGroup>
          <Button 
            mt={8} 
            w="100%"
            type="submit"
            colorScheme="teal"
          >Send
          </Button>
        </form>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default AuthModal;
