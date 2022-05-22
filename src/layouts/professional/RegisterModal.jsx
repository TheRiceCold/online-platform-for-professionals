import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"
import {useQuery, useMutation} from "react-query"
import {useHelpers} from "@/contexts/helpers/Context"

const RegisterModal = ({setAlerts}) => {
  const {user} = useAuth()
  const {dispatch} = useAuth()
  const {
    inputs, resolver,
    registerProfessional,
  } = useUsers("professional")
  const {getFields} = useHelpers()
  const formHook = useForm({resolver})

  const {data: fields} = useQuery("fields", getFields)

  const mutation = useMutation(registerProfessional, {
    onSuccess: res => {
      dispatch({type: "REGISTER_PROFESSIONAL"})
    },
    onError: error => {
      const {status, data} = error?.response
      const messages = data?.errors.map(error => error.title)

      if (status === 422)
        setAlerts(messages.map(
          message => {
            return {status: "error", message}
        })
      )
    }
  })

  return ( 
    <Modal 
      noCloseButton
      header="Register"
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
