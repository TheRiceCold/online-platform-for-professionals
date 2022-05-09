import Axios from "axios"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import {useAuthState} from "./AuthStateContext"
import {useState, useContext, createContext} from "react"

const axios = Axios.create({
  baseURL: "https://localhost:3000"
})

const AuthContext = createContext({})

const AuthProvider = ({children, isLoginPage}) => {
  const router = useRouter()
  const [auth, setAuth] = useState()
  const [{token}, dispatch] = useAuthState()

  const authKey = isLoginPage ? "login" : "signup"

  const authMutation = useMutation(authKey, async values => {
    try {
      const {data} = await axios.post(authKey, {user: {...values}})
      return data
    } catch (err) {
      throw new Error(err?.response.data.message)
    }
  },
  {
    onSuccess: data => {
      // TODO: extract token from header
      const token = data
      dispatch({ type: "SET_TOKEN", value: token })
      router.push("/") 
    }
  })
  
  return (
    <AuthContext.Provider value={{auth, setAuth, authMutation}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
