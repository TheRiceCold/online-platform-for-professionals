import styles from "@/styles/professionals/Profile.module.sass"

import Header from "./Header"
import Navbar from "@/layouts/navbar/Navbar"
import RegisterModal from "../RegisterModal"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function ProfessionalLayout() {
  const {user} = useAuth()
  const {navLinks} = useUsers("professional")

  {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
  return (user.professionalId ? 
    <>
      <Navbar styles={styles} links={navLinks}/>
      <section className={styles.layout}>
        <Header/>
      </section> 
    </> :
    <RegisterModal/>
  )
}

export default ProfessionalLayout

