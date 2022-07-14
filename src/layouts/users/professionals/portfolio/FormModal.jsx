import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {
  useMutation,
  useQueryClient
} from "react-query"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {capitalize} from "@/utils/stringHelpers"
import {useWorkPortfolios} from "@/work_portfolios_context"

function FormModal(props) {
  const [alerts, setAlerts] = useState()
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
          "Update Successful" : "New portfolio has been added"
        setAlert({ message, status: "success" })
      },
      onError: error => {
        const {status, data} = error?.response
        const messages = data?.errors.map(error => error.title)

        setAlerts(messages.map(
          message => {
            return {status: "error", message}
          })
        )
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
      alerts={alerts}
      header={header}
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
