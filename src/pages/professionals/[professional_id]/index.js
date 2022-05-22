import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import ProfileLayout from "@/layouts/professional/ProfileLayout"

import {useAuth} from "@/contexts/auth/Context"

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

