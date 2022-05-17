import Head from "next/head"
import {useState} from "react"
import {useRouter} from "next/router"
import {useForm} from "react-hook-form"
import {useMutation} from "react-query"
import Form from "@/components/forms/Form"
import {Heading, Stack} from "@chakra-ui/react"
import {useAppState} from "@/context/state/Context"

const ProfessionalEdit = () => {
  const [alerts, setAlerts] = useState()
  const {isReady, ...router} = useRouter()
  const {professional_id: id} = router.query
  const {useProfessionals} = useAppState()
  const {
    inputs, resolver,
    updateProfessional,
  } = useProfessionals()
  const formHook = useForm({resolver})

  const mutation = useMutation([id],
    updateProfessional, {
    onSettled: res => console.log(res)
  })

  const submitHandler = data => {
    mutation.mutate({...data})
  }

  return (
    <main>
      <Head>
        <title>Professional {id} Edit</title>
      </Head>
      <Heading>Edit Professional</Heading>
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
          submitHandler={submitHandler}
          submitValue="Edit Professional"
        />
      </Stack>
    </main>
  )
}

export default ProfessionalEdit
