import styles from '@/styles/Bookings.module.sass'

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/layouts/users/bookings/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {useDisclosure} from "@chakra-ui/react"

function Bookings() {
	const {userRole, userFullname} = useAuth()
	const {navLinks} = useUsers(userRole)

  const modals = {
    clienteleModal: useDisclosure(),
    subscribersModal: useDisclosure()
  }

	return (
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Bookings</title>
			</Head>
			<Navbar styles={styles} links={navLinks(modals)} />
			<Layout />
		</main>
	)
}

export default Bookings
