import styles from '@/styles/Bookings.module.sass'

import Head from "next/head"
import Navbar from "@/navbar"
import Layout from "@/bookings_layout"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function Bookings() {
  const router = useRouter()
	const {userRole, userFullname} = useAuth()
	const {navLinks} = useUsers("professional")

  if (userRole !== "professional")
    router.push("/")
  
	return (
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Bookings</title>
			</Head>
			<Navbar styles={styles} links={navLinks}/>
			<Layout/>
		</main>
	)
}

export default Bookings
