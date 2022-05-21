import {
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  Modal as ChakraModal, 
} from "@chakra-ui/react"
import Alert from "../feedback/Alert"

function Modal({children, ...props}) {
  const {header, alert, isOpen, onClose} = props

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
        {alert && <Alert {...alert} variant="top-accent"/>}
        <ModalBody mb={4}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
