import styles from "@/styles/users/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/professionals_layout/search/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

const Professionals = () => {
  const {userRole} = useAuth()
  const {navLinks: professional} = useUsers("professional")
  const {navLinks: client} = useUsers("client")

  const links = userRole === "client" ? client : professional

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals</title>
			</Head>
			<Navbar styles={styles} links={links}/>
			<Layout/>
		</main>
	)
}

export default Professionals
