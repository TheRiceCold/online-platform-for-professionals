import Head from "next/head"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import {useAppState} from "@/context/state/context"

const NewProfessional = () => {
  const {useProfessionals} = useAppState()
  const {
    resolver,
    inputList, 
    createProfessional,
  } = useProfessionals()
  const formHook = useForm({resolver})
  const mutation = useMutation("newProfessional", createProfessional)

  const submitHandler = data => {
    mutation.mutate({...data})
  }

  return (
    <main>
      <Head>
        <title>Professionals</title>
      </Head>
      <Form
        formHook={formHook}
        mutation={mutation}
        inputList={inputList}
        submitValue="Register"
        submitHandler={submitHandler}
      />
    </main>
  )
}

export default NewProfessional
