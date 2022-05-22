import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Modal as ChakraModal, 
} from "@chakra-ui/react"

function Modal({children, ...props}) {
  const {header, isOpen, onClose, noCloseButton} = props

  return (
    <ChakraModal 
      size="lg" 
      isOpen={isOpen}
      onClose={onClose} 
    >
      <ModalOverlay/>
      <ModalContent>
        {!noCloseButton && <ModalCloseButton/>}
        <ModalHeader>{header}</ModalHeader>
        <ModalBody mb={4}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
