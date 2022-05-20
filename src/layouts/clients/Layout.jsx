import styles from "@/styles/Clients.module.sass"

import Navbar from "../navbar/Navbar"
import {useAppState} from "@/context/state/Context"

const ClientLayout = ({fullname}) => {
  const {useClients} = useAppState()
  const {navLinks, userMenuItems} = useClients()

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
