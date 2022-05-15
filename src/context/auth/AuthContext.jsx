import {useStorage} from "@/hooks/useStorage"
import {authenticate, logout} from "./mutations"
import {
  useState, useEffect,
  useContext, createContext,
} from "react"

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  let rememberUser = false
  const storage = useStorage()
  const [authData, setAuthData] = useState()
  const loggedIn = (authData !== null)

  useEffect(() => {
    const storedAuthData = JSON.parse(
      storage.getItem({
        type: "session",
        key: "auth_data"
      })
    )
    setAuthData(storedAuthData)
  }, [])


  return (
    <AuthContext.Provider value={{
      logout,
      authData,
      loggedIn,
      authenticate,
      rememberUser, 
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
