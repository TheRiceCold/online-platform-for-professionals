import Axios from "../axios"
import {useRouter} from "next/router"
import {useMutation} from "react-query"
import {useStorage} from "@/hooks/useStorage"
import {
  useState, useContext, createContext
} from "react"

const AuthContext = createContext({})
const useAuth = () => useContext(AuthContext)

const AuthProvider = ({children, isLoginPage}) => {
  let rememberUser = false
  const router = useRouter()
  const storage = useStorage()
  const [alert, setAlert] = useState()
  const endpoint = isLoginPage ? "login" : "signup"

  const apiCall = async data => {
    try {
      const submittedData = {user: {...data}}
      console.log(submittedData)
      return await Axios.post(endpoint, submittedData)
    } catch (err) {
      const message = err.response.data.error
      setAlert({status: "error", message})
    }
  }

  const onSuccess = res => {
    if (res) {
      const token = res.headers.token
      // TODO: set to local if remember me is true
      storage.setItem({
        type: "session", key: "token",
        value: JSON.stringify(token)
      })
    }
  }

  // login and signup
  const authMutation = useMutation(endpoint, apiCall, { 
    onSuccess: () => { }
  })

  const submitHandler = async data => {
    await authMutation.mutateAsync({...data})
  }

  const mutation = {submitHandler, ...authMutation}

  const signOut = () => {
    storage.removeItem({type: "session", key: "auth"})
    router.push("") 
  }

  return (
    <AuthContext.Provider value={{
      alert, 
      signOut, 
      mutation, 
      isLoginPage, 
      rememberUser, 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export {useAuth}
export default AuthProvider
