import Head from "next/head"
import {useRouter} from "next/router"
import {useAuth} from "@/context/auth/Context"

const Home = () => {
  const router = useRouter()
  const {userRole, user} = useAuth()

  const homeContent = () => {
    switch(userRole) {
      case "professional": 
        router.push(`professionals/${user.professionalId}`)
        break
      case "client":
        router.push(`clients/${user.clientId}`)
        break
      case "admin":
        router.push(`admin`)
        break
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
