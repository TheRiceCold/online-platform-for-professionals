import {
  useState,
  useReducer,
  createContext
} from "react"
import Inputs from "./inputs"
import Actions from "./actions"
import Validations from "./validations"

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

      login: Actions.login,
      signup: Actions.signup,
      logout: Actions.logout,

      loginInputs: Inputs.login,
      signupInputs: Inputs.signup,

      loginResolver: zodResolver(Validations.login),
      signupResolver: zodResolver(Validations.signup),
    }}>
        {children}
    </Provider>
  )
}

export {
  AuthContext, 
  AuthProvider
}
