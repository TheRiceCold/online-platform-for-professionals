import {
  useState,
  useContext,
  createContext
} from "react"
import Axios from "axios"
import {useMutation} from "react-query"

const axios = Axios.create({
  baseURL: "https://localhost:3000"
})

const AuthContext = createContext({})
export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children, isLoginPage}) => {
  const [auth, setAuth] = useState({})

  const authKey = isLoginPage ? "login" : "signup"

  const authMutation = useMutation(authKey, async values => {
    try {
      const {data} = await axios.post(authKey, {user: {...values}})
      return data
    } catch (err) {
      throw new Error(err?.response.data.message)
    }
  })
  
  return (
    <AuthContext.Provider value={{auth, setAuth, authMutation}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
