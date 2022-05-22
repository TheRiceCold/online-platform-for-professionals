import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import ProfileLayout from "@/professionals_layout/profile/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"

function Professional() {
  const router = useRouter()
  const {userFullname, userRole} = useAuth()

  if (userRole !== "professional")
    router.push("/")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      {userRole === "professional" && <ProfileLayout/>}
    </main>
  )
}

export default Professional

