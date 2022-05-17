import Head from "next/head"
import {useState} from "react"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"
import {Heading, Stack} from "@chakra-ui/react"
import {useAppState} from "@/context/state/Context"

const NewProfessional = () => {
  const {useProfessionals} = useAppState()
  const [alerts, setAlerts] = useState()
  const {
    inputs, 
    resolver,
    createProfessional,
  } = useProfessionals()
  const formHook = useForm({resolver})

  const mutation = useMutation(
    "newProfessional", 
    createProfessional, {
      onSuccess: res => {
      },
      onError: error => {
        const {status, data} = error?.response
        const messages = data?.errors.map(error => error.title)

        if (status === 422)
          setAlerts(
            messages.map(message => {
            return {status: "error", message}
          })
        )
      }
    }
  )

  const submitHandler = data => {
    mutation.mutate({...data})
  }

  return (
    <main>
      <Head>
        <title>Professionals</title>
      </Head>
      {alerts && 
        alerts.map((alert, i) => (
          <Alert key={i} {...alert} />
        ))
      }
      <Heading>Register Professional</Heading>
      <Stack 
        p="8" 
        width="500px" 
        boxShadow="xl" 
        borderRadius="xl"
      >
        <Form
          inputs={inputs}
          formHook={formHook}
          mutation={mutation}
          submitValue="Register"
          submitHandler={submitHandler}
        />
      </Stack>
    </main>
  )
}

export default NewProfessional
