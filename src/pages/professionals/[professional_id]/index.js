import Head from "next/head"
import {useRouter} from "next/router"

const ProfessionalId = () => {
  const router = useRouter()
  const {professional_id: id} = router.query

  return (
    <main>
      <Head>
        <title>Professional {id}</title>
      </Head>
    </main>
  )
}

export default ProfessionalId
