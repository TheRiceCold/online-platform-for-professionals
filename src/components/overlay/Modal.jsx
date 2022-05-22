import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Modal as ChakraModal, 
} from "@chakra-ui/react"

function Modal({children, ...props}) {
  const {header, isOpen, onClose} = props

  return (
    <ChakraModal 
      size="lg" 
      isOpen={isOpen}
      onClose={onClose} 
    >
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>{header}</ModalHeader>
        <ModalBody mb={4}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
