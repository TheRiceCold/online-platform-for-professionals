import styles from "@/styles/Professional.module.sass"

import Head from "next/head"
import {useAppState} from "@/context/state/Context"
import Layout  from "@/layouts/professional/services/Layout"

function Services() {
  const {useProfessionals} = useAppState()
  const {fullname} = useProfessionals()

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Services</title>
      </Head>
      <Layout fullname={fullname}/>
    </main>
  )
}

export default Services
