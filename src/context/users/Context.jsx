import {
  useContext,
  createContext
} from "react"
import {
  AdminContext,
  AdminProvider,
} from "./admin/Context"
import {
  ClientsContext,
  ClientsProvider,
} from "./clients/Context"
import {
  ProfessionalsContext,
  ProfessionalsProvider,
} from "./professionals/Context"
import {useAppState} from "../state/Context"

const UsersContext = role => {
  switch(role) {
    case "professional":
        // Layout = dynamic(() => import("@/layouts/admin/Layout"))
      return ProfessionalsContext
    case "client":
      return ClientsContext
    case "admin":
      return AdminContext
    default:
      return createContext({})
  }
}

const UsersProvider = ({children}) => {
  const {Provider} = UsersContext()
  const {useAuth} = useAppState()
  const {user} = useAuth()

  return (
    <Provider value={{
      user
    }}>
      <AdminProvider>
        <ClientsProvider>
          <ProfessionalsProvider>
            {children}
          </ProfessionalsProvider>
        </ClientsProvider>
      </AdminProvider>
    </Provider>
  )
}

export default UsersProvider
export const useUsers = role => useContext(UsersContext(role))
