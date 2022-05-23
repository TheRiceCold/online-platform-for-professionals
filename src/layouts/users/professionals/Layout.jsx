import styles from "@/styles/users/Professionals.module.sass"

import UsersSidebar from "./UsersSidebar"
import ProfileOverview from "./ProfileOverview"

import {useState} from "react"

const ProfessionalsLayout = () => {
  const [selectedProfile, setSelectedProfile] = useState(null)

	return (
    <section className={styles.searchResultsLayout}>
      <UsersSidebar 
        setSelectedProfile={setSelectedProfile}
      />
      <ProfileOverview selectedProfile={selectedProfile}/>
    </section>
	)
}

export default ProfessionalsLayout
