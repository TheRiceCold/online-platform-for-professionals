import {
  Modal, 
  ModalBody,
  ModalHeader,
  ModalContent,
  ModalOverlay,
  ModalCloseButton,
} from "@chakra-ui/react"
import {useMutation} from "react-query"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"
import {useWorkPortfolios} from "@/context/users/professionals/work_portfolios/Context"

function FormModal({onClose, isOpen, action, selectedId}) {
  const {inputs, resolver} = useWorkPortfolios()
  console.log(action)
  const {
    createWorkPortfolio,
    updateWorkPortfolio,
    deleteWorkPortfolio,
  } = useWorkPortfolios()
  const formHook = useForm({resolver})
  const mutation = useMutation(
    action === "create" ? 
      createWorkPortfolio
      : action === "update" ? 
        updateWorkPortfolio 
        : deleteWorkPortfolio
  )
  const submitHandler = data => {
    const submittedData = action === "create" 
      ? {...data} : {selectedId, ...data}
    mutation.mutate(submittedData)
  }
 
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

export default FormModal
