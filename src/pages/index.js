import styles from "@/styles/Home.module.sass"

import Head from "next/head"
import Footer from "@/layouts/footer/Footer"
import HomeLayout from "@/layouts/home/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/contexts/auth/Context"

const Home = () => {
  const router = useRouter()
  const {userRole, user} = useAuth()

  switch(userRole) {
    case "professional": 
      const id = user.professionalId ? user.professionalId : "0"
      router.push(`professionals/${id}`)
      break
    case "client":
      router.push(`clients/${user.clientId}`)
      break
    case "admin":
      router.push(`admin`)
      break
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>Home</title>
      </Head> 
      <HomeLayout/>
      <Footer/>
    </main>
  )
}

export default Home
