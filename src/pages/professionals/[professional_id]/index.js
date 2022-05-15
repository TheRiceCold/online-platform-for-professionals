import Head from "next/head"
import {useQuery} from "react-query"
import {useRouter} from "next/router"
import {useAppState} from "@/context/state/context"

const ProfessionalId = () => {
  const router = useRouter()
  const {professional_id: id} = router.query

  const {useProfessionals} = useAppState()
  const {getProfessional} = useProfessionals()

  const {data} = useQuery(
    ["professional", id], 
    getProfessional, {
    enabled: router.isReady,
  })
  console.log(data)

  return (
    <main>
      <Head>
        <title>Professional {id}</title>
      </Head>
    </main>
  )
}

export default ProfessionalId
