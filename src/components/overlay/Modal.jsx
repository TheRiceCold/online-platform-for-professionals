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
    alerts,
    header, 
    isOpen, 
    onClose, 
    isCentered,
    noCloseButton,
  } = props

  return (
    <ChakraModal 
      size="lg" 
      isOpen={isOpen}
      onClose={onClose} 
      isCentered={isCentered}
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
