import {useState} from "react"
import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import Alert from "@/components/feedback/Alert"
import {Heading, Stack} from "@chakra-ui/react"
import {useAppState} from "@/context/state/Context"

const RegisterLayout = () => {
  const {useAuth, useProfessionals} = useAppState()
  const [alerts, setAlerts] = useState()
  const router = useRouter()
  const {user} = useAuth()
  const {
    inputs, resolver,
    createProfessional,
  } = useProfessionals()
  const formHook = useForm({resolver})

  const mutation = useMutation(createProfessional, {
    onSuccess: res => {
      // setRegistered(true)
      // router.push(`/professionals/${user.id}`) 
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
