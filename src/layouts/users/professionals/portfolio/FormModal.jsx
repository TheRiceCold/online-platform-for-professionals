import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {
  useMutation,
  useQueryClient
} from "react-query"
import {useForm} from "react-hook-form"
import {useWorkPortfolios} from "@/work_portfolios_context"
import { capitalize } from "@/utils/stringHelpers"

function FormModal(props) {
  const {action, selectedId, setAlert} = props
  const header = capitalize(`${action} Portfolio`)

  const {
    inputs, resolver,
    createWorkPortfolio, 
    updateWorkPortfolio,
  } = useWorkPortfolios()
  const queryClient = useQueryClient()
  const formHook = useForm({resolver})

  const mutation = useMutation(
    (action === "update")
      ? updateWorkPortfolio 
      : createWorkPortfolio, {
      onSuccess: () => {
        props.onClose()
        queryClient.invalidateQueries("work_portfolios")
        const message = action === "update" ? 
          "Update Successful" : "Added new portfolio"
        setAlert({ message, status: "success" })
      }
    })

  const submitHandler = data => {
    const submittedData = (action === "update") 
      ? {selectedId, ...data} : {...data}
    mutation.mutate(submittedData)
  }

  return (
    <Modal {...props} header={header}>
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
