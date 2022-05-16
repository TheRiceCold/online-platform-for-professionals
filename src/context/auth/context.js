import {
  useState,
  useReducer,
  createContext
} from "react"
import Inputs from "./inputs"
import Schema from "./schema"
import Actions from "./actions"

import {reducer} from "./reducer"
import {initialState} from "./initialState"
import {zodResolver} from "@hookform/resolvers/zod"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const {Provider} = AuthContext
  const [rememberUser, setRememberUser] = useState(false)
  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{
      user,
      dispatch,
      rememberUser, 
      setRememberUser,

      login: Actions.login,
      signup: Actions.signup,
      logout: Actions.logout,

      loginInputs: Inputs.login,
      signupInputs: Inputs.signup,

      loginResolver: zodResolver(Schema.login),
      signupResolver: zodResolver(Schema.signup),
    }}>
        {children}
    </Provider>
  )
}

export {
  AuthContext, 
  AuthProvider
}
