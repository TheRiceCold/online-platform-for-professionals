import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import {useUsers} from "@/contexts/users/Context"

function SettingsModal(props) {
  const {
    inputs,
    resolver,
    updateUserProfessional,
  } = useUsers("professional")

  const formHook = useForm({resolver})
  const mutation = useMutation(updateUserProfessional, { })
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Modal
      {...props}
      alert={alert}
      header="Account Settings"
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

export default SettingsModal
