import {
  useState, 
  useEffect,
  useContext, 
  createContext,
} from "react"
import AuthProvider from "../auth/context"
import {useStorage} from "@/hooks/useStorage"

const AppStateContext = createContext({})

const AppStateProvider = ({children}) => {
  const storage = useStorage()
  const [userRole, setUserRole] = useState()
  const authData = storage.getItem({type: "session", key: "auth_data"})

  useEffect(() => {
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
