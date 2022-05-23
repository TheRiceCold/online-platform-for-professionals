import Button from "@/components/Button"
import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useToast} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import {useCalendlyToken} from "@/calendly_token_context"

function CalendlyTokenModal(props) {
  const toast = useToast()
  const [action, setAction] = useState("create")
  const [toasts, setToasts] = useState()
  const {
    inputs, 
    deleteCalendlyToken,
    createCalendlyToken, 
    updateCalendlyToken
  } = useCalendlyToken()

  const formHook = useForm()
  const mutation = useMutation(
    action === "update" ? 
      updateCalendlyToken :
      createCalendlyToken, {
      onSuccess: () => {
        setToasts([{
          title: "Token Saved",
          duraion: 3000,
          variant: "solid",
          isClosable: true,
          status: "success",
        }])
        props.onClose()
      },
      onError: error => {
        const {errors} = error?.response?.data
        setToasts(
          errors.map(error => {
            return {
              title: error.title,
              duraion: 3000,
              status: "error",
              variant: "solid",
              isClosable: true,
            }
          })
        )
    },
  })

  const submitHandler = data => mutation.mutate({...data})

  useEffect(() => {
    if (toasts) 
      toasts.forEach(message => toast(message))
  }, [JSON.stringify(toasts)])

  const handleDelete = async () => {
    try {
      await deleteCalendlyToken()
      setToasts([{
        title: "Token deleted",
        duraion: 3000,
        variant: "solid",
        isClosable: true,
      }])
    } catch(error) {
      console.log(error) 
    }
  }

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
        submitValue="Authorize"
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
      <Button
        mt={4}
        w="full"
        variant="delete"
        onClick={handleDelete}
      >
        Delete existing token
      </Button>
    </Modal>
  )
}

export default CalendlyTokenModal
