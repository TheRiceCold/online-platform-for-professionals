import {
  Modal, 
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"
import {useWorkPortfolios} from "@/context/users/professionals/work_portfolios/Context"

function CreateModal({onClose, isOpen}) {
  const {
    inputs,
    resolver,
    createWorkPortfolio
  } = useWorkPortfolios()

  const formHook = useForm({resolver})
  const mutation = useMutation(createWorkPortfolio)
  const submitHandler = data => mutation.mutate({...data})
 
  return (
    <Modal onClose={onClose} size="lg" isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
        <ModalHeader>
          New Portfolio
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
