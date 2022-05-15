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

const AuthModal = props => {
  const {heading, isOpen, onClose} = props

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign="center">
            {heading}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form>
              <InputGroup mt={4}>
                <InputLeftElement
                  pointerEvents='none'
                  children={<EmailIcon color="gray.500"/>}
                />
                <Input placeholder="Email" />
              </InputGroup>
              <Button 
                type="submit"
                mt={8} w="100%"
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
