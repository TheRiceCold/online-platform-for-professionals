import Axios from "axios"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import {useContext, createContext} from "react"

const axios = Axios.create({
  baseURL: "http://localhost:3000/api/"
})

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children, isLoginPage}) => {
  const storage = useStorage()
  const endpoint = isLoginPage ? "login" : "signup"

  const isUserRole = (data, role) => 
    data && data?.userRole?.toLowerCase() === role.toLowerCase()

  const apiCall = async values => {
    const submittedData = {user: {...values}}
    return await axios.post(endpoint, submittedData)
  }

  // SUCCESSFUL API CALL
  const onSuccess = res => {
    const data = res.data.data
    const token = res.headers.token
    const userRole = data.attributes.role

    // TODO: set to local if remember me is true
    storage.setItem({
      type: "session", key: "auth",
      value: JSON.stringify({token, userRole})
    })
  }

  const authMutation = useMutation(endpoint, apiCall, {
    onSuccess, onSettled: () => location.reload()
  })
  
  return (
    <AuthContext.Provider value={{
      authMutation, isUserRole
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
