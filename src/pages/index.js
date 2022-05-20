import Head from "next/head"
import {useRouter} from "next/router"
import {useAppState} from "@/context/state/Context"

const Home = () => {
  const {useAuth} = useAppState()
  const router = useRouter()
  const {user} = useAuth()

  const homeContent = () => {
    const role = user.attributes.role.toLowerCase()
    switch(role) {
      case "professional": 
        router.push(`professionals/${user.professionalId}`)
        break
      case "client":
        router.push(`clients/${user.clientId}`)
        break
      case "admin":
        // Layout = dynamic(() => import("@/layouts/admin/Layout"))
        // return <Layout/>
    }
  }

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head> 
      {homeContent()}
    </main>
  )
}

export default Home
