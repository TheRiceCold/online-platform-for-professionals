import {
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal as ChakraModal,
} from '@chakra-ui/react'
import {
  InputLeftElement, InputGroup, 
  Input, Button} from "@chakra-ui/react"
import {EmailIcon} from "@chakra-ui/icons"

const FormModal = props => {
  const { heading, isOpen, onClose } = props

  return (
    <>
      <ChakraModal
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
      </ChakraModal>
    </>
  )
}

export default FormModal
