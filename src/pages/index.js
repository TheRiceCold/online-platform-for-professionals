import Head from "next/head"
import {useEffect, useState} from "react"

import {useUser} from "@/context/user/UserContext"
import AuthProvider from "@/context/auth/AuthContext"
import inputList from "@/constants/forms/loginInputs"

import AuthLayout from "@/layouts/AuthLayout"
import LoadingLayout from "@/layouts/LoadingLayout"
import AdminLayout from "@/layouts/users/AdminLayout"
import ClientLayout from "@/layouts/users/ClientLayout"
import ProfessionalLayout from "@/layouts/users/ProfessionalLayout"

const LoginPage = () => {
  const linkTo = {
    href: "/signup",
    text: "No Account?",
    linkText: "Join now"
  }

  return (
    <AuthProvider isLoginPage>
      <AuthLayout 
        linkTo={linkTo}
        heading="Sign In"
        submitValue="Login"
        inputList={inputList}
      />
    </AuthProvider>
  )
}

const Home = () => {
  // const {isError}
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
          <LoginPage/>
        ) : <LoadingLayout/>
      }
    </main>
  )
}

export default Home
