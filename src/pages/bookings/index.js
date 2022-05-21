import styles from "@/styles/Bookings.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/layouts/bookings/Layout"

import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"

function Bookings() {
  const {userRole, userFullname} = useAuth()
  const {navLinks} = useUsers(userRole)

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Bookings</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <Layout/>
    </main>
  )
}

export default Bookings
