import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import Navbar from "./navbar/Navbar"
import {useAppState} from "@/context/state/Context"

function ProfessionalLayout(props) {
  const {useAuth} = useAppState()
  const {user} = useAuth()

  return (
    <>
      <Navbar 
        user={user}
        fullname={props.fullname}
      />
      <section className={styles.layout}>
        <Header {...props}/>
      </section>
    </>
  )
}

export default ProfessionalLayout

