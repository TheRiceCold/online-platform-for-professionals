import styles from "@/styles/Clients.module.sass"

import Head from "next/head"
import {useAppState} from "@/context/state/Context"

function Clients() {
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const role = user?.attributes.role

  switch(role) {
    case "professional": 
      
      break
  }

  return (
    <main className={styles.main}>
      <Head>
        <title>Clients</title>
      </Head>
    </main>
  )
}

export default Clients
