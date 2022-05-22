import styles from "@/styles/professionals/Profile.module.sass"

import Head from "next/head"
import ProfileLayout from "@/professionals_layout/profile/Layout"

import {useAuth} from "@/auth_context"

function Professional() {
  const {userFullname} = useAuth()

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      <ProfileLayout/> 
    </main>
  )
}

export default Professional

