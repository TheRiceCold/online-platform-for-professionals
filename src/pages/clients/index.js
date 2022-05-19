import Head from "next/head"
import Layout from "@/layouts/clients/Layout"
import styles from "@/styles/Layouts.module.sass"

function Clients() {

  return (
    <main className={styles.main}>
      <Head>
        <title>Clients</title>
      </Head>
      <Layout/>
    </main>
  )
}

export default Clients
