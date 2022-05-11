import {useEffect, useState} from "react"
import {useAuth} from "@/context/AuthContext"
import LoadingLayout from "./LoadingLayout"
import LoginLayout from "./auth/LoginLayout"
import AdminLayout from "./users/AdminLayout"
import ClientLayout from "./users/ClientLayout"
import ProfessionalLayout from "./users/ProfessionalLayout"

const HomeLayout = () => {
  const [mounted, setMounted] = useState(false)
  const {isAdmin, isClient, isProfessional} = useAuth()

  useEffect(() => setMounted(true), [])
  
  if (mounted) {
    return (<>
      {
        isProfessional ? <ProfessionalLayout/> :
        isClient ? <ClientLayout/> :
        isAdmin ? <AdminLayout/> :
        <LoginLayout/>
      }
    </>)
  }

  return <LoadingLayout/>
}

export default HomeLayout
