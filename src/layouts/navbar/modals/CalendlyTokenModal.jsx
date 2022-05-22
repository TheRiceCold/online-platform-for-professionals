import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useCalendlyToken} from "@/calendly_token_context"

function CalendlyTokenModal(props) {
  const {
    inputs,
    createCalendlyToken,
  } = useCalendlyToken()

  const formHook = useForm()
  const mutation = useMutation(createCalendlyToken, {
    onSettled: res => console.log(res)
  })
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Modal
      {...props}
      isCentered
      alert={alert}
      header="Enter Calendly Token"
    >
      <Form
        noLabel
        inputs={inputs}
        submitValue="Save Token"
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default CalendlyTokenModal
