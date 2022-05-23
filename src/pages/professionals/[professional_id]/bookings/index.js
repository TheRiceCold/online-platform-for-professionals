import styles from '@/styles/Bookings.module.sass'

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/professionals_layout/bookings/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Bookings() {
	const {userRole, userFullname} = useAuth()
	const {navLinks} = useUsers(userRole)

	return (
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Bookings</title>
			</Head>
			<Navbar styles={styles} links={navLinks} />
			<Layout />
		</main>
	)
}

export default Bookings
