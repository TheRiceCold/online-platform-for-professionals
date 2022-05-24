import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import ClienteleModal from "@/layouts/modals/ClienteleModal"
import SubscribersModal from "@/layouts/modals/SubscribersModal"
import ProfileLayout from "@/professionals_layout/profile/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useDisclosure} from "@chakra-ui/react"

function Professional() {
  const router = useRouter()
  const {userFullname, userRole} = useAuth()

  if (userRole !== "professional")
    router.push("/")

  const modals = {
    clienteleModal: useDisclosure(),
    subscribersModal: useDisclosure()
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      { userRole === "professional" && 
        <ProfileLayout modals={modals}/>
      }
      {modals && modals.clienteleModal.isOpen && 
        <ClienteleModal {...modals.clienteleModal}/>
      }
      {modals && modals.subscribersModal.isOpen && 
        <SubscribersModal {...modals.subscribersModal}/>
      }
    </main>
  )
}

export default Professional

