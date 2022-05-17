import Head from "next/head"
import {useState} from "react"
import {useRouter} from "next/router"
import {Button, Heading} from "@chakra-ui/react"
import {useMutation, useQuery} from "react-query"
import {useAppState} from "@/context/state/Context"
import AlertDialog from "@/components/overlay/AlertDialog"
import {useDisclosure as useAlert} from "@chakra-ui/react"

const ProfessionalId = () => {
  const deleteAlert = useAlert()
  const {isReady, ...router} = useRouter()
  const {useProfessionals} = useAppState()
  const {professional_id: id} = router.query
  const [attributes, setAttributes] = useState()
  const {getProfessional, deleteProfessional} = useProfessionals()

  const query = useQuery(
    ["professional", id], 
    getProfessional,
    { 
      enabled: isReady,
      onSuccess: ({data})=> {
        const {data: professional} = data
        setAttributes(professional.attributes)
      }
    })

  const _delete = useMutation(() => deleteProfessional(id), 
    {
      enabled: isReady,
      onSuccess: () => {
        router.push("/professionals")
      },
      onIdle: () => {
        console.log("idle")
      }
    }
  )

  return (
    <main>
      <Head>
        <title>Professional {id}</title>
      </Head>
      <Heading>
        Field: {attributes?.field}
      </Heading>
      <Heading>
        Headline: {attributes?.headline}
      </Heading>
      <Heading>
        License Number: {attributes?.licenseNumber}
      </Heading>
      <Heading>
        Office Address: {attributes?.officeAddress}
      </Heading>
      <Button 
        isDisabled={!isReady}
        isLoading={_delete.isLoading}
        onClick={deleteAlert.onOpen}
      >
        Delete Professional
      </Button>
      <AlertDialog
        // isCentered
        buttonColor="red"
        alert={deleteAlert}
        buttonLabel="Delete"
        header="Delete Professional"
        buttonClick={_delete.mutate}
        label="Are you sure? You can't undo this action afterwards."
      />
    </main>
  )
}

export default ProfessionalId
