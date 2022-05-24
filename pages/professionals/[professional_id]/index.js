import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import ClienteleModal from "@/layouts/modals/ClienteleModal"
import SubscribersModal from "@/layouts/modals/SubscribersModal"
import ProfileLayout from "@/professionals_layout/profile/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Professional() {
  const router = useRouter()
  const {userFullname, userRole} = useAuth()
  const {navModals} = useUsers("professional")

  if (userRole !== "professional")
    router.push("/")

  const id = router.query['professional_id']

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      { userRole === "professional" && <ProfileLayout id={id}/> }

      {navModals.clienteleModal.isOpen && 
        <ClienteleModal {...modals.clienteleModal}/>
      }
      {navModals.subscribersModal.isOpen && 
        <SubscribersModal {...modals.subscribersModal}/>
      }
    </main>
  )
}

export default Professional

