import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useUsers} from "@/contexts/users/Context"
import {useMutation, useQuery} from "react-query"
import {useHelpers} from "@/contexts/helpers/Context"

function SettingsModal(props) {
  const {
    inputs,
    resolver,
    updateUserProfessional,
  } = useUsers("professional")
  const {getFields} = useHelpers()

  const formHook = useForm({resolver})
  const {data: fields} = useQuery("fields", getFields)
  const mutation = useMutation(updateUserProfessional, { })
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Modal
      {...props}
      alert={alert}
      header="Account Settings"
    >
      <Form
        inputs={inputs(fields)}
        submitValue="Save"
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default SettingsModal
