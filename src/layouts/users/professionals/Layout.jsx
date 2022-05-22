import styles from "@/styles/users/Professionals.module.sass"

import UsersSidebar from "./UsersSidebar"
import ProfileOverview from "./ProfileOverview"

const ProfessionalsLayout = () => {
	return (
    <section className={styles.searchResultsLayout}>
      <UsersSidebar/>
      <ProfileOverview/>
    </section>
	)
}

export default ProfessionalsLayout
