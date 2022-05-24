import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Navbar from "@/navbar"
import Layout from "@/clients_layout/profile/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

const Client = () => {
  const {userFullname, userRole} = useAuth()
  const {navLinks} = useUsers("client")
  const router = useRouter()

  if (userRole !== "client")
    router.push("/")

	return (userRole === "client" &&
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Client</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <Layout/>
    </main>
  )
}

export default Client
