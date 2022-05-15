import {reducer} from "./reducer"
import {initialState} from "./initialState"
import Action from "./actions"
import {
  useState,
  useReducer,
  createContext
} from "react"

export const authContext = createContext()

const AuthProvider = ({children}) => {
  const {Provider} = authContext
  const [rememberUser, setRememberUser] = useState(false)
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{
      user,
      dispatch,
      rememberUser, 
      login: Action.login,
      signup: Action.signup,
      logout: Action.logout,
    }}>
        {children}
    </Provider>
  )
}

export default AuthProvider
