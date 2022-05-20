import Actions from "./actions"
import {navLinks} from "./navLinks"
import {createContext} from "react"
import {useRouter} from "next/router"
import {userMenuItems} from "./userMenuItems"
import {useAppState} from "@/context/state/Context"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {
  const {Provider} = ClientsContext
  const {useAuth} = useAppState()
  const {user, logout} = useAuth()
  const router = useRouter()
  const call = new Actions(user)

  const menuItems = openSettings => 
    userMenuItems(user, router, logout, openSettings)

  return (
    <Provider value={{
      userMenuItems: menuItems,
      navLinks: navLinks(user.clientId),

      getClients: call.getAll,
      getClient: call.getById,
      deleteClient: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ClientsContext,
  ClientsProvider
}
