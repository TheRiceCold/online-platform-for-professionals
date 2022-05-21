import {
  Modal, 
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"
import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"

import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useServices} from "@/context/users/professionals/services/Context"

function CreateModal({onClose, isOpen}) {
  const {
    inputs,
    resolver,
    createService
  } = useServices()

  const formHook = useForm({resolver})
  const mutation = useMutation(createService)
  const submitHandler = data => mutation.mutate({...data})
 
  return (
    <Modal onClose={onClose} size="lg" isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>
          New Service
        </ModalHeader>
        <Alert message="Success" status="success" variant="top-accent"/>
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

export default CreateModal
