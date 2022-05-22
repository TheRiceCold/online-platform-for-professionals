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
  const mutation = useMutation(createCalendlyToken, { })
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Modal
      {...props}
      alert={alert}
      header="Calendly Token"
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

export default CalendlyTokenModal
