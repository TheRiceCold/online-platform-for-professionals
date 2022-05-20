import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import {useQuery} from "react-query"
import {useUsers} from "@/context/users/Context"

function ProfessionalLayout({fullname}) {
  const {
    userImg,
    getLocation,
    getContactInfo,
  } = useUsers("professional")

  const {data: location} = useQuery("location", getLocation)
  const {data: contactInfo, isLoading} = useQuery("contact_info", getContactInfo)

  return (
    <>
      <section className={styles.layout}>
        <Header 
          img={userImg}
          fullname={fullname}
          location={location} 
          isLoading={isLoading}
          contactInfo={contactInfo}
        />
      </section>
    </>
  )
}

export default ProfessionalLayout
