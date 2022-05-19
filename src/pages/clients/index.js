import Head from "next/head"
import {useQuery} from "react-query"
import Layout from "@/layouts/clients/Layout"
import {useAppState} from "@/context/state/Context"

function Clients() {
  const {useClients} = useAppState()
  const {getClients} = useClients()
  const clients = useQuery("clients", getClients)

  return (
    <main>
      <Head>
        <title>Clients</title>
      </Head>
      <Layout clients={clients}/>
    </main>
  )
}

export default Clients

