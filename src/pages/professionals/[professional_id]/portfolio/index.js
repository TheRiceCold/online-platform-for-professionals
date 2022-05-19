import styles from "@/styles/Layouts.module.sass"

import Head from "next/head"
import {useAppState} from "@/context/state/Context"
import Layout  from "@/layouts/professional/portfolio/Layout"

function Portfolio() {
  const {useProfessionals} = useAppState()
  const {fullname} = useProfessionals()

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Portfolio</title>
      </Head>
      <Layout fullname={fullname}/>
    </main>
  )
}

export default Portfolio
