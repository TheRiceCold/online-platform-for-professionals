import styles from "@/styles/professionals/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/layouts/professionals/Layout"

import {useUsers} from "@/contexts/users/Context"

const Professionals = () => {
	const { navLinks } = useUsers('professional')

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals Search</title>
			</Head>
			<Navbar styles={styles} links={navLinks} />
			<Layout />
		</main>
	)
}

export default Professionals
