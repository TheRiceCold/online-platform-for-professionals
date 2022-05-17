import {
  useContext, 
  createContext,
} from "react"
import {
  AuthContext,
  AuthProvider,
} from "../auth/Context"
import {
  AdminContext,
  AdminProvider,
} from "../admins/Context"
import {
  ClientsContext,
  ClientsProvider,
} from "../clients/Context"
import {
  ProfessionalsContext,
  ProfessionalsProvider,
} from "../professionals/Context"

const AppStateContext = createContext()

const AppStateProvider = ({children}) => {
  const {Provider} = AppStateContext
  const useAuth = () => useContext(AuthContext)
  const useAdmin = () => useContext(AdminContext)
  const useClients = () => useContext(ClientsContext)
  const useProfessionals = () => useContext(ProfessionalsContext)

  return (
    <Provider value={{
      useAuth,
      useAdmin,
      useClients,
      useProfessionals,
    }}>
      <AuthProvider>
        <AdminProvider>
          <ClientsProvider>
            <ProfessionalsProvider>
              {children} 
            </ProfessionalsProvider>
          </ClientsProvider>
        </AdminProvider>
      </AuthProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
