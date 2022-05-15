import Head from "next/head"
import {useRouter} from "next/router"
import {useState, useLayoutEffect} from "react"
import {useAppState} from "@/context/state/AppStateContext"
// Layouts
import AdminLayout from "@/layouts/users/AdminLayout"
import ClientLayout from "@/layouts/users/ClientLayout"
import ProfessionalLayout from "@/layouts/users/ProfessionalLayout"

const Home = () => {
  const title = "Login"
  const router = useRouter()
  const {userRole} = useAppState()
  const [mounted, setMounted] = useState(false)

  useLayoutEffect(() => setMounted(true), [])

  const homeContent = () => {
    switch(userRole) {
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
        <title>{title}</title>
      </Head> 
      {mounted && homeContent()}
    </main>
  )
}

export default Home
