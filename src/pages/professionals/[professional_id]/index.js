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
    getLocation,
    getContactInfo,
  } = useProfessionals()

  const {data: contactInfo, isLoading} = useQuery("contact_info", getContactInfo)
  const {data: fullname} = useQuery("fullname", getFullname)
  const {data: location} = useQuery("location", getLocation)

  return (
    <main className={styles.main}>
      <Head>
        <title>{fullname} | Professional</title>
      </Head>
      {user.professionalId ? 
        <ProfileLayout
          img={userImg}
          location={location} 
          fullname={fullname}
          isLoading={isLoading}
          contactInfo={contactInfo}
        /> :
        <RegisterLayout/>
      }
    </main>
  )
}

export default Professional

