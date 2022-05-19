import Head from "next/head"
import dynamic from "next/dynamic"
import {useRouter} from "next/router"
import {useAppState} from "@/context/state/Context"

const Home = () => {
  const {useAuth} = useAppState()
  const router = useRouter()
  const {user} = useAuth()

  const homeContent = () => {
    let Layout = null
    const role = user.role.toLowerCase()
    switch(role) {
      case "professional": 
        // Layout = dynamic(() => import("@/layouts/professional/Layout"))
        // return <Layout/>
        router.push(`professionals/${user.id}`)
        break
      case "client":
        // Layout = dynamic(() => import("@/layouts/client/Layout"))
        // return <Layout/>
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
