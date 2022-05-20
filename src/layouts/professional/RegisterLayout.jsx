import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"
import {Heading, Stack} from "@chakra-ui/react"

import {useState} from "react"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"

const RegisterLayout = () => {
  const [alerts, setAlerts] = useState()
  const {dispatch} = useAuth()
  const {
    inputs, resolver,
    registerProfessional,
  } = useUsers("professional")
  const formHook = useForm({resolver})

  const mutation = useMutation(registerProfessional, {
    onSuccess: res => {
      dispatch({type: "REGISTER_PROFESSIONAL"})
    },
    onError: error => {
      console.log(error)
      const {status, data} = error?.response
      const messages = data?.errors.map(error => error.title)

      if (status === 422)
        setAlerts(
          messages.map(message => {
          return {status: "error", message}
        })
      )
    }
  })

  return ( 
    <>
      {alerts && alerts.map((alert, i) => (
        <Alert key={i} {...alert} />
      ))}
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
          submitHandler={data => mutation.mutate({...data})}
        />
      </Stack>
    </>
  )
}

export default RegisterLayout
