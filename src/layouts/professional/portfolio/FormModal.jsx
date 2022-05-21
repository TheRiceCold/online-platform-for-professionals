import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {
  useMutation,
  useQueryClient
} from "react-query"
import {useForm} from "react-hook-form"
import {useWorkPortfolios} from "@/work_portfolios_context"

function FormModal(props) {
  const {action, selectedId} = props
  const {
    createWorkPortfolio, 
    updateWorkPortfolio
  } = useWorkPortfolios()
  const queryClient = useQueryClient()
  const {inputs, resolver} = useWorkPortfolios()
  const formHook = useForm({resolver})

  const mutation = useMutation(
    (action === "update")
      ? updateWorkPortfolio 
      : createWorkPortfolio, {
      onSuccess: () => {
        props.onClose()
        queryClient.invalidateQueries("work_portfolios")
      }
    })

  const submitHandler = data => {
    const submittedData = (action === "update") 
      ? {selectedId, ...data} : {...data}
    mutation.mutate(submittedData)
  }
 
  return (
    <Modal 
      {...props}
      alert={alert} 
      header={`Portfolio`}
    >
      <Form
        inputs={inputs}
        submitValue="Save"
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default FormModal
