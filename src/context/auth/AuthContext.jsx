import Axios from "../axios"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import {useContext, createContext} from "react"

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children, isLoginPage}) => {
  let rememberUser = false
  const router = useRouter()
  const storage = useStorage()
  const endpoint = isLoginPage ? "login" : "signup"

  const apiCall = async values => {
    const submittedData = {user: {...values}}
    return await Axios.post(endpoint, submittedData)
  }

  const onSuccess = res => {
    const token = res.headers.token
    let attr = res.data.data.attributes
  
    if (attr.role === "professional") {
      const field = res.data?.included[0]?.attributes.field
      attr = {...attr, field}
    }

    // TODO: set to local if remember me is true
    storage.setItem({
      type: "session", key: "auth",
      value: JSON.stringify({token, attr})
    })
  }

  // login and signup
  const authMutation = useMutation(endpoint, apiCall, {
    onSuccess, onSettled: () => location.reload()
  })

  const submitHandler = async data => 
    await authMutation.mutateAsync({...data})

  const mutation = {submitHandler, ...authMutation}

  const signOut = () => {
    storage.removeItem({type: "session", key: "auth"})
    router.push("") 
  }

  return (
    <AuthContext.Provider value={{mutation, rememberUser, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
