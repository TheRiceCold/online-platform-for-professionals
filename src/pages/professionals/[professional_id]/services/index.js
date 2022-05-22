import styles from "@/styles/professionals/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout  from "@/layouts/professional/services/Layout"

import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

function Services() {
  const {userFullname} = useAuth()
  const {navLinks} = useUsers("professional")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Services</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <Layout />
    </main>
  )
}

export default Services
