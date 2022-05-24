import styles from '@/styles/Bookings.module.sass'

import Head from "next/head"
import Navbar from "@/navbar"
import Layout from "@/bookings_layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function ClientBookings() {
	const {userRole, userFullname} = useAuth()
	const {navLinks} = useUsers("client")
  const router = useRouter()

  if (userRole !== "client")
    router.push("/")
  
	return (userRole === "client" &&
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Bookings</title>
			</Head>
			<Navbar styles={styles} links={navLinks}/>
			<Layout/>
		</main>
	)
}

export default ClientBookings
