import Head from "next/head"
import {useState} from "react"
import {useQuery} from "react-query"
import Alert from "@/components/feedback/Alert"
import {useAppState} from "@/context/state/Context"

const Professionals = () => {
  const [alert, setAlert] = useState()
  const {useProfessionals} = useAppState()
  const {getProfessionals} = useProfessionals()
  const data = useQuery("professionals", getProfessionals)

  return (
    <main>
      <Head>
        <title>Professionals</title>
      </Head>
      {alert && <Alert {...alert}/>}
    </main>
  )
}

export default Professionals
