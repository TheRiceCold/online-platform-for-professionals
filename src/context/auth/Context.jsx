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
import {capitalize} from "@/utils/stringHelpers"
import {zodResolver} from "@hookform/resolvers/zod"
import {useReducer, useContext, createContext} from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const {Provider} = AuthContext

  const [user, dispatch] = useReducer(reducer, initialState)
  const call = new Actions(dispatch, user?.token)

  const userRole = user?.attributes?.role
  const {city, region, firstName, lastName} = user?.attributes || {}

  const userFullname = capitalize(`${firstName} ${lastName}`)
  const userLocation = capitalize(`${city}, ${region}, Philippines`)

  // Temporary User Image
  const userImage = "https://avatars.dicebear.com/api/male/username.svg" 

  return (
    <Provider value={{
      user,
      dispatch,

      // Attributes
      userRole,
      userImage,
      userFullname,
      userLocation,

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
