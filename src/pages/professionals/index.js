import Head from "next/head"
import {useQuery} from "react-query"
import {useAppState} from "@/context/state/context"

const Professionals = () => {
  const {useProfessionals} = useAppState()
  const {getProfessionals} = useProfessionals()
  const professionals = useQuery("professionals", getProfessionals)

  return (
    <main>
      <Head>
        <title>Professionals</title>
      </Head>
    </main>
  )
}
export default Professionals
