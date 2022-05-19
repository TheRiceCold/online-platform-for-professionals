import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useQuery} from "react-query"
import {capitalize} from "@/utils/stringHelpers"
import {useAppState} from "@/context/state/Context"
import PortfolioLayout  from "@/layouts/professional/portfolio/Layout"

function Portfolio() {
  const {useProfessionals} = useAppState()
  const {getUserDetails} = useProfessionals()
  const userDetails = useQuery("user_details", getUserDetails)

  const included = userDetails?.data?.included[0]
  const {firstName, lastName} = included?.attributes || {}

  const fullname = capitalize(`${firstName || ""} ${lastName || ""}`)

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Portfolio</title>
      </Head>
      <PortfolioLayout fullname={fullname}/>
    </main>
  )
}

export default Portfolio
