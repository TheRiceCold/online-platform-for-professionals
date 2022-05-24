import Form from "@/components/forms/Form"
import Modal from "@/components/overlay/Modal"

import {useAuth} from "@/auth_context"
import {useForm} from "react-hook-form"
import {useHelpers} from "@/helpers_context"
import {useMutation, useQueries} from "react-query"

function AccountSettingsModal(props) {
  const {getCities, getRegions} = useHelpers()
  const {updateInputs, updateAccount} = useAuth()

  const formHook = useForm()
  const mutation = useMutation(updateAccount, { })
  const submitHandler = data => mutation.mutate({...data})

  const [
    {data: cities}, 
    {data: regions}
  ] = useQueries([
    { 
      queryKey: "cities", 
      queryFn: getCities 
    }, 
    { 
      queryKey: "regions", 
      queryFn: getRegions
    }
  ])

  const inputs = updateInputs(regions, cities)

  return (
    <Modal
      {...props}
      alert={alert}
      header="Update Account"
    >
      <Form
        inputs={inputs}
        mutation={mutation}
        formHook={formHook}
        submitValue="Update"
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default AccountSettingsModal

