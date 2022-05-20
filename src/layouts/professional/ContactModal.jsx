import {
  Modal, 
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
  ModalFooter,
  Button,
} from "@chakra-ui/react"

function ContactModal({onClose, isOpen, contactInfo}) {
  const {
    field,
    licenseNumber,
    officeAddress,
  } = contactInfo || {}

  return (
      <Modal onClose={onClose} size="sm" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <strong>
              Field: {field}
            </strong> <br/>
            <strong>
              License Number: {licenseNumber}
            </strong> <br/>
            <strong>
              Office Address: {officeAddress}
            </strong>
          </ModalBody>
        </ModalContent>
      </Modal>
  )
}

export default ContactModal
