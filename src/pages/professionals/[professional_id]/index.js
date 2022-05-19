import styles from "@/styles/Professionals.module.sass"

import Head from "next/head"
import {useAppState} from "@/context/state/Context"
import Profile from "@/layouts/professional/ProfileLayout"
import Register from "@/layouts/professional/RegisterLayout"

function Professional() {
  const {useAuth, useProfessionals} = useAppState()
  const {user} = useAuth()
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
      {user.registered ? 
        <Profile
          img={userImg}
          location={location} 
          fullname={fullname}
          isLoading={userDetails.isLoading}
        /> :
        <Register/>
      }
    </main>
  )
}

export default Professional

