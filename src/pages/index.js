import Head from "next/head"
import {useEffect, useState} from "react"
import {useUser} from "@/context/user/UserContext"
import LoadingLayout from "@/layouts/LoadingLayout"
import LoginLayout from "@/layouts/auth/LoginLayout"
import AdminLayout from "@/layouts/users/AdminLayout"
import ClientLayout from "@/layouts/users/ClientLayout"
import ProfessionalLayout from "@/layouts/users/ProfessionalLayout"

const Home = () => {
  const [mounted, setMounted] = useState(false)
  const {user, isAdmin, isClient, isProfessional} = useUser()

  const title = user ? "Home" : "Sign in"
  useEffect(() => setMounted(true), [])

  return (
    <main>
      <Head>
        <title>{title}</title>
      </Head> 
      {mounted ? 
        (
          isProfessional ? <ProfessionalLayout/>  :
          isClient ? <ClientLayout/>  :
          isAdmin ? <AdminLayout/>  :
          <LoginLayout/>
        ) : <LoadingLayout/>
      }
    </main>
  )
}

export default Home

