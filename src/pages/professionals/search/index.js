import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Layout from "@/layouts/searchPage/Layout"
import Navbar from "@/layouts/navbar/Navbar"

import {useUsers} from "@/contexts/users/Context"

const ProfessionalsSearch = () => {
	const { navLinks } = useUsers('professional')

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals Search</title>
			</Head>
			<Navbar styles={styles} links={navLinks} />
			<Layout />
		</main>
	);
};

export default ProfessionalsSearch
