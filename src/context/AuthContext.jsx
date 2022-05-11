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
  const REMEMBER_USER = false
  const storage = useStorage()
  const endpoint = isLoginPage ? "login" : "signup"

  const apiCall = async values => {
    const submittedData = {user: {...values}}
    return await axios.post(endpoint, submittedData)
  }

  // SUCCESSFUL API CALL
  const onSuccess = res => {
    const data = res.data.data
    const attr = data.attributes
    const token = res.headers.token

    // TODO: set to local if remember me is true
    storage.setItem({
      type: "session", key: "auth",
      value: JSON.stringify({token, attr})
    })
  }

  const authMutation = useMutation(endpoint, apiCall, {
    onSuccess, onSettled: () => location.reload()
  })
  
  const storageType = !REMEMBER_USER && "session"
  const authData = storage.getItem({type: storageType, key: "auth"})
  const attributes = JSON.parse(authData)?.attr

  const checkUserRole = role => 
    attributes?.role?.toLowerCase() === role.toLowerCase()

  const isAdmin = checkUserRole("admin")
  const isClient = checkUserRole("client")
  const isProfessional = checkUserRole("professional")
  const isUser = isAdmin || isClient || isProfessional

  const user = {
    fullname: attributes?.firstName + " " + attributes?.lastName,
    role: attributes?.role,
    signOut: () => {
      storage.removeItem({type: "session", key: "auth"})
      location.reload()
    }
  }

  return (
    <AuthContext.Provider value={{
      authMutation, isUser, user,
      isAdmin, isClient, isProfessional,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
