import styles from "@/styles/Layouts.module.sass"

import Head from "next/head"
import {useAppState} from "@/context/state/Context"
import Layout  from "@/layouts/professional/bookings/Layout"

function Bookings() {
  const {useProfessionals} = useAppState()
  const {fullname} = useProfessionals()

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Bookings</title>
      </Head>
      <Layout fullname={fullname}/>
    </main>
  )
}

export default Bookings
