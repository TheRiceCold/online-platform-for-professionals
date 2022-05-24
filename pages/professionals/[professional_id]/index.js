import styles from "@/styles/users/Profile.module.sass"

import Head from "next/head"
import Layout from "@/professionals_layout/profile/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"

function Professional() {
  const router = useRouter()
  const {userFullname} = useAuth()

  const id = router.query['professional_id']

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      <Layout id={id}/>
    </main>
  )
}

export default Professional

