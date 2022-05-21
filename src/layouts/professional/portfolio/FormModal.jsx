import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useState} from "react"
import {useMutation} from "react-query"
import {useForm} from "react-hook-form"
import {
  useWorkPortfolios
} from "@/contexts/users/professionals/work_portfolios/Context"

function FormModal(props) {
  const {action, selectedId} = props
  const [alert, setAlert] = useState()
  const {
    createWorkPortfolio, 
    updateWorkPortfolio
  } = useWorkPortfolios()
  const {inputs, resolver} = useWorkPortfolios()
  const formHook = useForm({resolver})

  const mutation = useMutation(
    (action === "update")
      ? updateWorkPortfolio 
      : createWorkPortfolio, {
      onSuccess: () => {
        console.log("success")
        // setAlert({message}) 
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
