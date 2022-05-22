import {
  Modal, 
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"

import {useQuery} from "react-query"
import {useUsers} from "@/contexts/users/Context"
import {useHelpers} from "@/contexts/helpers/Context"

function ContactModal({onClose, isOpen}) {
  const {getContactInfo} = useUsers("professional")
  const {data: contactInfo} = useQuery("contact_info", getContactInfo)
  const {field, licenseNumber, officeAddress} = contactInfo || {}

  const {getFields} = useHelpers()
  const {data: fields} = useQuery("fields", getFields)

  return (
      <Modal onClose={onClose} size="sm" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <strong>
              Field: {fields && fields[field].label}
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
