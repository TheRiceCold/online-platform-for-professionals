import {
  Modal, 
  Button,
  ModalBody,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"

function SettingsModal({onClose, isOpen}) {

  return (
    <Modal onClose={onClose} size="sm" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Account Settings</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        </ModalBody>
        <ModalFooter>
          <Button>Edit</Button> 
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal
