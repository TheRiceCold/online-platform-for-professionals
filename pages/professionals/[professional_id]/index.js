import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Layout from "@/professionals_layout/profile/Layout"
import ClienteleModal from "@/layouts/modals/ClienteleModal"
import SubscribersModal from "@/layouts/modals/SubscribersModal"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Professional() {
  const router = useRouter()
  const {userFullname, userRole} = useAuth()
  const {navModals} = useUsers(userRole)

  const id = router.query['professional_id']

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      <Layout id={id}/>

      {userRole === "professional" && (
        navModals.clientele.isOpen ?
        <ClienteleModal {...navModals.clientele}/> :
        navModals.subscribers.isOpen ?
          <SubscribersModal {...navModals.subscribers}/> :
            null
      )}
    </main>
  )
}

export default Professional

