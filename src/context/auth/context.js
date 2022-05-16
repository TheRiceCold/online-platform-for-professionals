import {
  useState,
  useReducer,
  createContext
} from "react"
import Actions from "./Actions"
// Login
import LoginInputs from "./login/Inputs"
import LoginSchema from "./login/Schema"
import LoginResponses from "./login/Responses"
// Signup
import SignupInputs from "./signup/Inputs"
import SignupSchema from "./signup/Schema"
import SignupResponses from "./signup/Responses"

import {reducer} from "./reducer"
import {useStorage} from "@/hooks/useStorage"
import {zodResolver} from "@hookform/resolvers/zod"

export { AuthContext, AuthProvider }

const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const storage = useStorage()
  const {Provider} = AuthContext
  const actions = new Actions(storage)
  const [rememberUser, setRememberUser] = useState(false)

  const storedAuthData = JSON.parse(
    storage.getItem({
      type: "session",
      key: "auth_data"
    })
  ) || ""

  const initialState = {
    id: storedAuthData.id || "",
    role: storedAuthData.role || "",
    token: storedAuthData.token || "",
    isAuth: storedAuthData.isAuth || false,
  }

  const [user, dispatch] = useReducer(reducer, initialState)

  return (
    <Provider value={{
      user,
      dispatch,
      rememberUser, 
      setRememberUser,
      // Responses
      LoginResponses,
      SignupResponses,
      // Actions
      login: actions.login,
      signup: actions.signup,
      logout: actions.logout,
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
