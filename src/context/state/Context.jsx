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

const AppStateContext = createContext()

const AppStateProvider = ({children}) => {
  const {Provider} = AppStateContext
  const useLocations = () => useContext(LocationsContext)
  const useAuth = () => useContext(AuthContext)

  return (
    <Provider value={{
      useAuth,
      useLocations,
    }}>
      <LocationsProvider>
        <AuthProvider>
          {children} 
        </AuthProvider>
      </LocationsProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
