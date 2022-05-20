import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useQuery} from "react-query"
import {useUsers} from "@/context/users/Context"
import {useAppState} from "@/context/state/Context"
import ProfileLayout from "@/layouts/professional/ProfileLayout"
import RegisterLayout from "@/layouts/professional/RegisterLayout"

function Professional() {
  const {getFullname} = useUsers("professional")
  const {data: fullname} = useQuery("fullname", getFullname)
  const {useAuth} = useAppState()
  const {user} = useAuth()

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
      {user.professionalId ? 
        <ProfileLayout fullname={fullname}/> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

