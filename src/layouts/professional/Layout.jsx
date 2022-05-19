import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import Navbar from "../navbar/Navbar"
import {useAppState} from "@/context/state/Context"

function ProfessionalLayout(props) {
  const {useAuth, useProfessionals} = useAppState()
  const {navLinks} = useProfessionals()
  const {user} = useAuth()

  return (
    <>
      <Navbar 
        user={user}
        links={navLinks}
        fullname={props.fullname}
      />
      <section className={styles.layout}>
        <Header {...props}/>
      </section>
    </>
  )
}

export default ProfessionalLayout
