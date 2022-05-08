import {createContext, useContext} from "react"
import {useState} from "react"

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({})
  
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
