import Head from "next/head"
import {useRouter} from "next/router"

const ClientId = () => {
  const router = useRouter()
  const {client_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Client {id}</title>
      </Head>
    </main>
  )
}

export default ClientId
