import styles from "@/styles/Clients.module.sass"

import Navbar from "../navbar/Navbar"
import {useUsers} from "@/context/users/Context"

const ClientLayout = ({fullname}) => {
  const {navLinks, userMenuItems} = useUsers("client")

  return (
    <>
      <Navbar 
        styles={styles}
        fullname={fullname}
        userMenuItems={userMenuItems}
        links={navLinks}
      />
    </>
  )
}

export default ClientLayout
