import Head from "next/head"
import {useRouter} from "next/router"

const ServiceId = () => {
  const router = useRouter()
  const {service_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Service {id}</title>
      </Head>
    </main>
  )
}

export default ServiceId
