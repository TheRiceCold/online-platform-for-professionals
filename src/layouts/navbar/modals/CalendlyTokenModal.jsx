import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useToast} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import {useCalendlyToken} from "@/calendly_token_context"

function CalendlyTokenModal(props) {
  const toast = useToast()
  const [toastErrors, setToastErrors] = useState()
  const {inputs, createCalendlyToken} = useCalendlyToken()

  const formHook = useForm()
  const mutation = useMutation(createCalendlyToken, {
    onError: error => {
      const {errors} = error?.response?.data
      setToastErrors(errors.map(error => {
        return {
          title: error.title,
          duraion: 3000,
          status: "error",
          variant: "solid",
          isClosable: true,
        }
      }))
    },
  })
  const submitHandler = data => mutation.mutate({...data})

  useEffect(() => {
    if (toastErrors) 
      toastErrors.forEach(errors => toast(errors))
  }, [JSON.stringify(toastErrors)])

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
