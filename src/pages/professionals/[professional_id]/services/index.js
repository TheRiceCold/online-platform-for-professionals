import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import {useAuth} from "@/context/auth/Context"
import Layout  from "@/layouts/professional/services/Layout"

function Services() {
  const {userFullname} = useAuth()

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Services</title>
      </Head>
      <Navbar styles={styles}/>
      <Layout />
    </main>
  )
}

export default Services
