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

function UsersContext(role) {
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

function UsersProvider({children}) {
  const {Provider} = UsersContext()

  return (
    <Provider value={{ }}>
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
