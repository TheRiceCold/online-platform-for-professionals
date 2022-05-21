import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"

import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"

const Professionals = () => {
  const {userRole, userFullname} = useAuth()
  const {navLinks} = useUsers(userRole)

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Professionals</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
    </main>
  )
}

export default Professionals
