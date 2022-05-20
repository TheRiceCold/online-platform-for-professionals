import styles from "@/styles/Clients.module.sass"

import Navbar from "../navbar/Navbar"
import {useAppState} from "@/context/state/Context"

const ClientLayout = ({fullname}) => {
  const {useAuth, useClients} = useAppState()
  const {navLinks} = useClients()
  const {user} = useAuth()

  return (
    <>
        <Navbar 
          user={user}
          styles={styles}
          links={navLinks(user.clientId)}
          fullname={fullname}
        />
    </>
  )
}

export default ClientLayout
