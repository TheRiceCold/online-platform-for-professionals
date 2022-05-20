import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import {useAuth} from "@/context/auth/Context"
import ProfileLayout from "@/layouts/professional/ProfileLayout"
import RegisterLayout from "@/layouts/professional/RegisterLayout"

function Professional() {
  const {userFullname, user} = useAuth()

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      <Navbar styles={styles}/>
      {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
      {user.professionalId ? 
        <ProfileLayout/> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

