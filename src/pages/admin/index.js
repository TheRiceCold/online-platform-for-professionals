import styles from "@/styles/Admin.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import AdminLayout from "@/layouts/admin/Layout"
import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"

const Admin = () => {
  const {userFullname} = useAuth()
  const {navLinks} = useUsers("admin")

  return (
    <main className={styles.main}>
      <Head>
        <title>{userFullname} | Admin</title>
      </Head>
      <Navbar styles={styles} links={navLinks}/>
      <AdminLayout/>
    </main>
  )
}

export default Admin
