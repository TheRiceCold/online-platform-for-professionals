import {
  Input, 
  Button,
  InputGroup, 
  InputLeftElement, 

  Modal,
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from '@chakra-ui/react'
import {EmailIcon} from "@chakra-ui/icons"

function AuthModal(props) {
  const {heading, isOpen, onClose} = props

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <InputGroup mt={4}>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.500"/>
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
    </>
  )
}

export default AuthModal
