import {
  ModalBody,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal as ChakraModal,
} from '@chakra-ui/react'

const Modal = props => {
  const { heading, content, isOpen, onClose } = props

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
            {content}
          </ModalBody>
        </ModalContent>
      </ChakraModal>
    </>
  )
}

export default Modal
