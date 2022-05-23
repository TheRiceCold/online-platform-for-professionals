import Button from "@/components/Button"
import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"
import MaskedInput from "@/components/MaskedInput"

import {useForm} from "react-hook-form"
import {useUsers} from "@/users_context"
import {useToast} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import {useMutation, useQuery} from "react-query"
import {useCalendlyToken} from "@/calendly_token_context"

function CalendlyTokenModal(props) {
  const toast = useToast()
  const [action, setAction] = useState("create")
  const [toasts, setToasts] = useState()
  const {
    inputs, 
    getCalendlyToken,
    deleteCalendlyToken,
    createCalendlyToken, 
    updateCalendlyToken
  } = useCalendlyToken()
  const {
    getUserProfessional
  } = useUsers("professional")

  const formHook = useForm()
  const {data: calendlyTokenId} = useQuery(
    "calendly_token_id", 
    getUserProfessional, {
      select: data => data.data.relationships.calendlyToken.data.id,
      onSuccess: token_id => {
        if (!!token_id) 
          setAction("update")
      }
    }
  )

  const {data: calendlyToken} = useQuery(
    ["calendly_token", calendlyTokenId],
    getCalendlyToken, {
      enabled: !!calendlyTokenId,
      select: data => data.attributes.authorization
    }
  )

  const mutation = useMutation(
    action === "update" ? 
      data => {
        const submittedData = {calendlyTokenId, ...data}
        updateCalendlyToken(submittedData)
      }
      : createCalendlyToken, {
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

  const handleDelete = async() => {
    try {
      await deleteCalendlyToken(calendlyTokenId)
      setToasts([{
        title: "Token has been deleted",
        duraion: 3000,
        variant: "solid",
        isClosable: true,
      }])
      onClose()
    } catch(error) { console.log(error) }
  }

  return (
    <Modal
      {...props}
      isCentered
      alert={alert}
      header="Calendly Token"
    >
      <Form
        noLabel
        inputs={inputs}
        submitValue={action === "update" ? "Update" : "Authorize"}
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
      {/* USER CALENDLY TOKEN EXIST */}
      {!!calendlyTokenId &&
        <> 
          <MaskedInput 
            readOnly 
            label="Current Token:"
            value={calendlyToken} 
          />
          <Button
            mt={4}
            w="full"
            variant="delete"
            onClick={handleDelete}
          >
            Delete existing token
          </Button>
        </>
      }
    </Modal>
  )
}

export default CalendlyTokenModal
