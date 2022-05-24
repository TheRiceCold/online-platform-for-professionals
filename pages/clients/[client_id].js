import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Navbar from "@/navbar"
import Layout from "@/clients_layout/profile/Layout"
import SubscriptionsModal from "@/layouts/modals/SubscriptionsModal"
import MyProfessionalsModal from "@/layouts/modals/MyProfessionalsModal"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

const Client = () => {
  const {userFullname} = useAuth()
  const {navLinks, navModals} = useUsers("client")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Client</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <Layout/>

      {navModals.subscriptions.isOpen ?
        <SubscriptionsModal {...navModals.subscriptions}/> :
        navModals.myProfessionals.isOpen ?
          <MyProfessionalsModal {...navModals.myProfessionals}/> :
            null
      }
    </main>
  )
}

export default Client
