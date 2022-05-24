import styles from "@/styles/users/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/navbar"
import Layout from "@/professionals_layout/portfolio/Layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Portfolio() {
  const router = useRouter()
	const {userFullname, userRole} = useAuth()
	const {navLinks} = useUsers('professional')

  if (userRole !== "professional")
    router.push("/")

	return (userRole === "professional" &&
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Work Portfolio</title>
			</Head>
			<Navbar styles={styles} links={navLinks} />
			<Layout />
		</main>
	)
}

export default Portfolio
