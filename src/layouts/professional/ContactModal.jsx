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
          <ModalBody>
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
          <ModalFooter>
            <Button>Edit</Button> 
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ContactModal
