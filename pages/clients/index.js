import styles from "@/styles/Clients.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Clients() {
  const {userRole, userFullname} = useAuth()
  const {navLinks} = useUsers(userRole)

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Clients</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
    </main>
  )
}

export default Clients
