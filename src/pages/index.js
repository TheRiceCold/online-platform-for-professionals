import styles from "@/styles/Home.module.sass"

import Head from "next/head"

import {useRouter} from "next/router"
import Navbar from "@/layouts/navbar/Navbar"
import HomeLayout from "@/layouts/home/Layout"
import {useAuth} from "@/contexts/auth/Context"

const Home = () => {
  const router = useRouter()
  const {userRole, user} = useAuth()

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

  return (
    <main>
      <Head>
        <title>Home</title>
      </Head> 
      <Navbar styles={styles}/>
      <HomeLayout/>
    </main>
  )
}

export default Home
