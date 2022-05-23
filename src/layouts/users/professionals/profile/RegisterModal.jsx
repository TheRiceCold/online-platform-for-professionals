import Button from "@/components/Button"
import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"
import {Flex, Heading} from "@chakra-ui/react"

import {useState} from "react"
import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"
import {useQuery, useMutation} from "react-query"
import {useHelpers} from "@/contexts/helpers/Context"

const RegisterModal = () => {
  const router = useRouter()
  const {getFields} = useHelpers()
  const [alerts, setAlerts] = useState()
  const {user, dispatch, logout} = useAuth()

  const {inputs, resolver, createProfessional} = useUsers("professional")
  const formHook = useForm({mode: "onChange", resolver})

  const {data: fields} = useQuery("fields", getFields)

  const mutation = useMutation(createProfessional, {
    onSuccess: ({data})=> {
      dispatch({type: "REGISTER_PROFESSIONAL", payload: data})
      router.push("/")
    },
    onError: error => {
      const {status, data} = error?.response
      const messages = data?.errors.map(error => error.title)

      console.log(error)

      if (status === 422)
        setAlerts(messages.map(
          message => {
            return {status: "error", message}
        })
      )
    }
  })

  const header = (
    <Flex justifyContent="space-between">
      <Heading size="lg">
        Register Professional
      </Heading>
      <Button variant="delete" onClick={logout}>
        Sign Out
      </Button>
    </Flex>
  )

  return ( 
    <Modal 
      noCloseButton
      alerts={alerts}
      header={header}
      isOpen={!user.professionalId}
    >
      <Form
        inputs={inputs(fields)}
        formHook={formHook}
        mutation={mutation}
        submitValue="Register"
        submitHandler={data => mutation.mutate({...data})}
      />
    </Modal>
  )
}

export default RegisterModal
