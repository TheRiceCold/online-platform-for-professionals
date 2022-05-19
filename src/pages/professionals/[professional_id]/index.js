import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useQuery} from "react-query"
import {useAppState} from "@/context/state/Context"
import ProfileLayout from "@/layouts/professional/ProfileLayout"
import RegisterLayout from "@/layouts/professional/RegisterLayout"

function Professional() {
  const {useAuth, useProfessionals} = useAppState()
  const {user} = useAuth()
  const {
    userImg,
    getFullname,
  } = useProfessionals()

  const {data: fullname} = useQuery("fullname", getFullname)

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      {user.professionalId ? 
        <ProfileLayout
          img={userImg}
          location={"location"} 
          fullname={fullname}
          isLoading={true}
        /> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

