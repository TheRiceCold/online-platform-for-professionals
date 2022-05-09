import Axios from "axios"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import {useAuthState} from "./AuthStateContext"
import {useContext, createContext} from "react"

const axios = Axios.create({
  baseURL: "https://localhost:3001"
})

const AuthContext = createContext({})

const AuthProvider = ({children, isLoginPage}) => {
  const router = useRouter()
  const [{}, dispatch] = useAuthState()

  const authKey = isLoginPage ? "login" : "signup"

  const apiCall = async values => {
    const {data} = await axios.post(authKey, {user: {...values}})
    return data
  }

  const authMutation = useMutation(authKey, apiCall, {
    onSuccess: data => {
      // TODO: extract token from header
      const token = data
      dispatch({type: "SET_TOKEN", value: token})
      router.push("/") 
    }
  })
  
  return (
    <AuthContext.Provider value={{authMutation}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export const useAuth = () => useContext(AuthContext)
