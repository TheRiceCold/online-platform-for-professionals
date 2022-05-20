import styles from "@/styles/Clients.module.sass"

import Head from "next/head"
import Layout from "@/layouts/clients/Layout"
import {capitalize} from "@/utils/stringHelpers"
import { useAppState } from "@/context/state/Context"

const ClientId = () => {
  const {useAuth} = useAppState()
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
