import CryptoAES from "crypto-js/aes"
import CryptoENC from "crypto-js/enc-utf8"

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
  const secret = process.env.NEXT_PUBLIC_SECRET
  const [rememberUser, setRememberUser] = useState(false)

  const storedAuthData = CryptoAES.decrypt(
    storage.getItem({
      type: "session",
      key: "auth_data"
    }), secret)

  let authData = storedAuthData.toString(CryptoENC)
  authData = authData && JSON.parse(authData)

  const initialState = {
    id: authData.id || "",
    role: authData.role || "",
    token: authData.token || "",
    isAuth: authData.isAuth || false,
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
