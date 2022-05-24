import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useForm} from "react-hook-form"
import {useUsers} from "@/users_context"
import {useHelpers} from "@/helpers_context"
import {useMutation, useQuery} from "react-query"

function FieldSettingsModal(props) {
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
        mutation={mutation}
        formHook={formHook}
        submitValue="Update"
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default FieldSettingsModal
