import {reducer} from "./reducer"
import {initialState} from "./initialState"
import Action from "./actions"
import {
  useState,
  useReducer,
  useContext, 
  createContext,
} from "react"

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children}) => {
  const [rememberUser, setRememberUser] = useState(false)
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <AuthContext.Provider value={{
      dispatch,
      rememberUser, 
      login: Action.login,
      signup: Action.signup,
      logout: Action.logout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
