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
  const {
    onClose, noCloseButton,
    header, isOpen, alerts,
  } = props

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
        {alerts && 
          alerts.map((alert, i) => (
            <Alert key={i} {...alert}/>
        ))}
        <ModalBody mb={4}>
          {children}
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal
