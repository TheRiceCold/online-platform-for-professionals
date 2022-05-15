import {
  useState, 
  useContext, 
  createContext,
  useLayoutEffect,
} from "react"
import {useStorage} from "@/hooks/useStorage"
import AuthProvider from "../auth/AuthContext"

const AppStateContext = createContext({})

const AppStateProvider = ({children}) => {
  const storage = useStorage()
  const [userRole, setUserRole] = useState()
  const authData = storage.getItem({type: "session", key: "auth_data"})

  useLayoutEffect(() => {
    setUserRole(JSON.parse(authData)?.role)
  }, [])

  return (
    <AppStateContext.Provider value={{userRole}}>
      <AuthProvider>
        {children} 
      </AuthProvider>
    </AppStateContext.Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
