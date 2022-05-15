import {useContext, createContext} from "react"
import AuthProvider, {authContext} from "../auth/context"

const AppStateContext = createContext()

const AppStateProvider = ({children}) => {
  const {Provider} = AppStateContext
  const useAuth = () => useContext(authContext)

  return (
    <Provider value={{useAuth}}>
      <AuthProvider>
        {children} 
      </AuthProvider>
    </Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
