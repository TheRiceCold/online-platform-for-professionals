import styles from "@/styles/users/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/professionals_layout/search/Layout"

import {useUsers} from "@/contexts/users/Context"

const Professionals = () => {
  const {navLinks} = useUsers("professional")

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals</title>
			</Head>
			<Navbar styles={styles} links={navLinks}/>
			<Layout/>
		</main>
	)
}

export default Professionals
