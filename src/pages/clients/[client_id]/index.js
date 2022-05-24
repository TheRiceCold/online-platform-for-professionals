import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/clients_layout/profile/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {useDisclosure} from "@chakra-ui/react"

const Client = () => {
  const {navLinks} = useUsers("client")
  const {userFullname} = useAuth()

  const modals = {
    clienteleModal: useDisclosure(),
    subscribersModal: useDisclosure()
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Client</title>
      </Head>
      <Navbar 
        styles={styles} 
        modals={modals}
        links={navLinks(modals)}
      />
      <Layout/>
    </main>
  )
}

export default Client
