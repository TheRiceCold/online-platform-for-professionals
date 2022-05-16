import Head from "next/head"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"
import {useQuery, useMutation} from "react-query"
import {useAppState} from "@/context/state/context"

const Professionals = () => {
  const {useProfessionals} = useAppState()
  const {
    resolver,
    inputList, 
    getProfessionals,
    createProfessional,
  } = useProfessionals()
  const formHook = useForm({resolver})
  const mutation = useMutation("newProfessional", createProfessional)
  const professionals = useQuery("professionals", getProfessionals)

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
export default Professionals
