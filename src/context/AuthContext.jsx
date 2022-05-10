import Axios from "axios"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import {useAppState} from "./AppStateContext"
import {useContext, createContext} from "react"

const axios = Axios.create({
  baseURL: "http://localhost:3000/api/"
})

const AuthContext = createContext({})

const AuthProvider = ({children, isLoginPage}) => {
  const router = useRouter()
  const {state, dispatch} = useAppState()

  const endpoint = isLoginPage ? "login" : "signup"

  const apiCall = async values => {
    const submittedData = {user: {...values}}

    console.log("submitted data: ", submittedData)
    return await axios.post(endpoint, submittedData)
  }

  const authMutation = useMutation(endpoint, apiCall, {
    onSuccess: res => {
      // SUCCESSFUL API CALL
      const data = res.data.data
      const token = res.headers.token
      const userRole = data.attributes.role

      console.log("token: ", token)
      console.log("user role: ", userRole)

      // const token = data
      // dispatch({type: "SET_TOKEN", value: token})
      // router.push("/") 
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
