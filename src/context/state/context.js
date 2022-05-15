import {
  useContext, 
  createContext
} from "react"
import {
  AuthContext,
  AuthProvider
} from "../auth/context"
import {
  ClientsContext,
  ClientsProvider,
} from "../client/context"
import {
  ProfessionalsContext,
  ProfessionalsProvider
} from "../professional/context"

const AppStateContext = createContext()

const AppStateProvider = ({children}) => {
  const {Provider} = AppStateContext
  const useAuth = () => useContext(AuthContext)
  const useClients = () => useContext(ClientsContext)
  const useProfessionals = () => useContext(ProfessionalsContext)

  return (
    <Provider value={{
      useAuth,
      useClients,
      useProfessionals,
    }}>
      <AuthProvider>
        <ClientsProvider>
          <ProfessionalsProvider>
            {children} 
          </ProfessionalsProvider>
        </ClientsProvider>
      </AuthProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
