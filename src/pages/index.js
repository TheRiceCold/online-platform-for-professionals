import Head from "next/head"
import {useRouter} from "next/router"
import {useState, useLayoutEffect} from "react"
import {useAppState} from "@/context/state/context"
import AdminLayout from "@/layouts/users/AdminLayout"
import ClientLayout from "@/layouts/users/ClientLayout"
import ProfessionalLayout from "@/layouts/users/ProfessionalLayout"

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const {useAuth} = useAppState()
  const router = useRouter()
  const {user} = useAuth()

  useLayoutEffect(() => {
    setMounted(true)
  }, [])

  const homeContent = () => {
    switch(user.role) {
      case "professional": 
        return <ProfessionalLayout/>
      case "client":
        return <ClientLayout/>
      case "admin":
        return <AdminLayout/>
      default: 
        router.push("login")
    }
  }

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head> 
      {mounted && homeContent()}
    </main>
  )
}

export default Home
