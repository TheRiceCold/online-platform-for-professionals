import {
  useContext, 
  createContext,
} from "react"
import {
  AuthContext,
  AuthProvider,
} from "../auth/context"
import {
  AdminContext,
  AdminProvider,
} from "../admins/context"
import {
  ClientsContext,
  ClientsProvider,
} from "../clients/context"
import {
  ProfessionalsContext,
  ProfessionalsProvider,
} from "../professionals/context"

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
