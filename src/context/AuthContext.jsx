import Axios from "axios"
import {useMutation} from "react-query"
import {useContext, createContext} from "react"
import {useStorage} from "@/context/StorageContext"

const axios = Axios.create({
  baseURL: "http://localhost:3000/api/"
})

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children, isLoginPage}) => {
  const {setStorage} = useStorage()
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

      console.log("user role: ", userRole)
      console.log("token: ", token)
      // TODO: set to local if remember me is true
      setStorage({
        type: "session", 
        key: "AUTH", 
        value: JSON.stringify({token, userRole})
      })
    }
  })
  
  return (
    <AuthContext.Provider value={{authMutation}}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
