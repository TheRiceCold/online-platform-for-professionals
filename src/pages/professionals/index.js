import Head from "next/head"
import {useState} from "react"
import {useQuery} from "react-query"
import Alert from "@/components/feedback/Alert"
import {useAppState} from "@/context/state/context"

const Professionals = () => {
  const [alert, setAlert] = useState()
  const {useProfessionals} = useAppState()
  const {getProfessionals} = useProfessionals()

  const data = useQuery(
    "professionals", getProfessionals, {
      onError: ({response})=> {
        setAlert({
          status: "error", 
          message: response.data.error
        })
      },
      retry: false,
    }
  )

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
