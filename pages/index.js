import Head from "next/head"
import {useEffect, useState} from "react"
import {useStorage} from "@/hooks/useStorage"
import {useAuth} from "@/context/AuthContext"
import {isBrowser} from "@/utils/windowHelpers"
// Layouts
import LoadingLayout from "@/layouts/LoadingLayout"
import LoginLayout from "@/layouts/auth/LoginLayout"
import AdminLayout from "@/layouts/users/AdminLayout"
import ClientLayout from "@/layouts/users/ClientLayout"
import ProfessionalLayout from "@/layouts/users/ProfessionalLayout"

const Home = () => {
  let authData = null
  const REMEMBER_USER = false
  const storage = useStorage()
  const {isUserRole} = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (isBrowser) {
    const storageType = !REMEMBER_USER && "session"
    authData = storage.getItem({type: storageType, key: "auth"})
    authData = JSON.parse(authData)
  }

  const isLoading = !mounted
  const isAdmin = mounted && isUserRole(authData, 'admin')
  const isClient= mounted && isUserRole(authData, 'client')
  const isProfessional = mounted && isUserRole(authData, 'professional')

  return (
    <main>
      <Head>
        <title>{authData ? "Profile" : "Sign In"}</title>
      </Head> 
      {
        isProfessional ? <ProfessionalLayout/> :
        isClient ? <ClientLayout/> :
        isAdmin ? <AdminLayout/> :
        isLoading ? <LoadingLayout/> :
        <LoginLayout/>
      }
    </main>
  )
}

export default Home
