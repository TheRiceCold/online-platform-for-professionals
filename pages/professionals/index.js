import styles from "@/styles/users/Professionals.module.sass"

import Head from "next/head"
import Navbar from "@/layouts/navbar/Navbar"
import Layout from "@/professionals_layout/search/Layout"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {useDisclosure} from "@chakra-ui/react"

const Professionals = () => {
  const {userRole} = useAuth()
  const {navLinks: professional} = useUsers("professional")
  const {navLinks: client} = useUsers("client")

  const links = userRole === "client" ? client : professional

  const modals = {
    clienteleModal: useDisclosure(),
    subscribersModal: useDisclosure()
  }

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals</title>
			</Head>
			<Navbar styles={styles} links={links(modals)}/>
			<Layout/>
		</main>
	)
}

export default Professionals
