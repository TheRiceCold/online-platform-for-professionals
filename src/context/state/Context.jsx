import {
  useContext, 
  createContext,
} from "react"
import {
  LocationsContext,
  LocationsProvider
} from "../locations/Context"
import {
  AuthContext,
  AuthProvider,
} from "../auth/Context"
import {
  AdminContext,
  AdminProvider,
} from "../admin/Context"
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
  const useLocations = () => useContext(LocationsContext)

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

      // Helpers
      useLocations,
    }}>
      <LocationsProvider>
        <AuthProvider>
          <AdminProvider>
            <ClientsProvider>
              <ProfessionalsProvider>
                {children} 
              </ProfessionalsProvider>
            </ClientsProvider>
          </AdminProvider>
        </AuthProvider>
      </LocationsProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
