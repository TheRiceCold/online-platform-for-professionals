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
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import {useAppState} from "@/context/state/Context"

function SettingsModal({onClose, isOpen}) {
  const {useProfessionals} = useAppState() 
  const {
    inputs,
    resolver,
    updateProfessional,
  } = useProfessionals()

  const formHook = useForm({resolver})
  const mutation = useMutation(updateProfessional)
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Modal onClose={onClose} size="lg" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>
          Account Settings
        </ModalHeader>
        <ModalBody mb={4}>
          <Form
            inputs={inputs}
            submitValue="Save"
            mutation={mutation}
            formHook={formHook}
            submitHandler={submitHandler}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal
