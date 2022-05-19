import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useQuery} from "react-query"
import {capitalize} from "@/utils/stringHelpers"
import Layout from "@/layouts/professional/Layout"
import {useAppState} from "@/context/state/Context"

function Professional() {
  const {useProfessionals} = useAppState()
  const {getUserDetails} = useProfessionals()
  const userDetails = useQuery("user_details", getUserDetails)

  const {
    firstName, 
    lastName,
    region,
    city,
  } = userDetails?.data?.included[0].attributes || {}

  const fullname = capitalize(`${firstName || ""} ${lastName || ""}`)
  const location = `${city}, ${region}, Philippines`
  const img = "https://avatars.dicebear.com/api/male/username.svg" 

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      <Layout 
        img={img}
        location={location} 
        fullname={fullname}
        isLoading={userDetails.isLoading}
      />
    </main>
  )
}

export default Professional

