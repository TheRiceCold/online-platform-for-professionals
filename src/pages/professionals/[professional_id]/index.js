import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useQuery} from "react-query"
import Navbar from "@/layouts/navbar/Navbar"
import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"
import ProfileLayout from "@/layouts/professional/ProfileLayout"
import RegisterLayout from "@/layouts/professional/RegisterLayout"

function Professional() {
  const {user} = useAuth()
  const {getFullname} = useUsers("professional")
  const {data: fullname} = useQuery("fullname", getFullname)

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      <Navbar styles={styles}/>
      {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
      {user.professionalId ? 
        <ProfileLayout fullname={fullname}/> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

