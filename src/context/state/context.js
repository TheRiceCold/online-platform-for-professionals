import {
  useContext, 
  createContext
} from "react"
import {
  AuthContext,
  AuthProvider
} from "../auth/context"
import {
  ProfessionalsContext,
  ProfessionalsProvider
} from "../professional/context"

const AppStateContext = createContext()

const AppStateProvider = ({children}) => {
  const {Provider} = AppStateContext
  const useAuth = () => useContext(AuthContext)
  const useProfessionals = () => useContext(ProfessionalsContext)

  return (
    <Provider value={{
      useAuth,
      useProfessionals,
    }}>
      <AuthProvider>
        <ProfessionalsProvider>
          {children} 
        </ProfessionalsProvider>
      </AuthProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
