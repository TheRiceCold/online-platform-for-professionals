import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/clients_layout/profile/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

const Client = () => {
  const {navLinks} = useUsers("client")
  const {userFullname} = useAuth()

  return (
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
