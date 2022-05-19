import {
  Modal, 
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"

function ContactModal({onClose, isOpen}) {

  return (
      <Modal onClose={onClose} size="xl" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Something
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default ContactModal
