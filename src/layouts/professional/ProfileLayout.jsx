import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import {useQuery} from "react-query"
import Navbar from "../navbar/Navbar"
import {useAppState} from "@/context/state/Context"

function ProfessionalLayout({fullname}) {
  const {useProfessionals} = useAppState()
  const {
    userImg,
    navLinks,
    getLocation,
    userMenuItems,
    getContactInfo,
  } = useProfessionals()

  const {data: location} = useQuery("location", getLocation)
  const {data: contactInfo, isLoading} = useQuery("contact_info", getContactInfo)

  return (
    <>
      <Navbar 
        styles={styles}
        links={navLinks}
        fullname={fullname}
        userMenuItems={userMenuItems}
      />
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
