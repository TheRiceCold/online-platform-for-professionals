import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import Layout from "@/layouts/professional/Layout"
import {useAppState} from "@/context/state/Context"

function Professional() {
  const {useProfessionals} = useAppState()
  const {
    userImg,
    fullname, 
    location,
    userDetails, 
  } = useProfessionals()

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      <Layout 
        img={userImg}
        location={location} 
        fullname={fullname}
        isLoading={userDetails.isLoading}
      />
    </main>
  )
}

export default Professional

