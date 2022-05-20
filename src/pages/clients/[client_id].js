import styles from "@/styles/Clients.module.sass"

import Head from "next/head"
import Layout from "@/layouts/clients/Layout"

import {useAuth} from "@/context/auth/Context"
import {capitalize} from "@/utils/stringHelpers"

const ClientId = () => {
  const {user} = useAuth()
  const {firstName, lastName} = user.attributes
  const fullname = capitalize(`${firstName} ${lastName}`)

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Client</title>
      </Head>
      <Layout fullname={fullname}/>
    </main>
  )
}

export default ClientId
