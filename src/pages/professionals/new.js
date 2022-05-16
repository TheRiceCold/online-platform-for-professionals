import Head from "next/head"
import {Heading, Stack} from "@chakra-ui/react"
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

  const mutation = useMutation(
    "newProfessional", 
    createProfessional, {
      onSuccess: res => {

      },
      onError: error => {
        console.log(error)
      },
    }
  )

  const submitHandler = data => {
    mutation.mutate({...data})
  }

  return (
    <main>
      <Head>
        <title>Professionals</title>
      </Head>
      <Heading>Register Professional</Heading>
      <Stack 
        p="8" 
        width="500px" 
        boxShadow="xl" 
        borderRadius="xl"
      >
        <Form
          formHook={formHook}
          mutation={mutation}
          inputList={inputList}
          submitValue="Register"
          submitHandler={submitHandler}
        />
      </Stack>
    </main>
  )
}

export default NewProfessional
