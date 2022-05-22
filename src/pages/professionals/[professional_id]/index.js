import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import ProfileLayout from "@/layouts/professional/ProfileLayout"
import RegisterLayout from "@/layouts/professional/RegisterLayout"

import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

function Professional() {
  const {userFullname, user} = useAuth()
  const {navLinks} = useUsers("professional")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professional</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
      {user.professionalId ? 
        <ProfileLayout/> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

