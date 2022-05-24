import styles from "@/styles/users/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/professionals_layout/portfolio/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Portfolio() {
	const {userFullname} = useAuth()
	const {navLinks} = useUsers('professional')

	return (
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
