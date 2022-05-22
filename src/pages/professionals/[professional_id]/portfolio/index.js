import styles from "@/styles/professionals/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/layouts/professional/portfolio/Layout"

import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

function Portfolio() {
  const {userFullname} = useAuth()
  const {navLinks} = useUsers("professional")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Work Portfolio</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <Layout/>
    </main>
  )
}

export default Portfolio
