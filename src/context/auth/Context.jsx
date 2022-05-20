import {
  useReducer,
  useContext,
  createContext
} from "react"

import {
  LocationsProvider
} from "@/context/locations/Context"

import Actions from "./Actions"
// Login
import LoginInputs from "./login/Inputs"
import LoginSchema from "./login/Schema"
import LoginStatuses from "./login/Statuses"
// Signup
import SignupInputs from "./signup/Inputs"
import SignupSchema from "./signup/Schema"
import SignupStatuses from "./signup/Statuses"

import {reducer} from "./reducer"
import {initialState} from "./initialState"
import {zodResolver} from "@hookform/resolvers/zod"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [user, dispatch] = useReducer(reducer, initialState)
  const call = new Actions(dispatch, user?.token)

  const {Provider} = AuthContext

  const userRole = user?.attributes?.role

  return (
    <Provider value={{
      user,
      userRole,
      dispatch,

      // Statuses
      LoginStatuses,
      SignupStatuses,
      // Actions
      login: call.login,
      signup: call.signup,
      logout: call.logout,
      // Inputs
      loginInputs: LoginInputs,
      signupInputs: SignupInputs,
      // Resolvers (validations)
      loginResolver: zodResolver(LoginSchema),
      signupResolver: zodResolver(SignupSchema),
    }}>
        {children}
    </Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)
