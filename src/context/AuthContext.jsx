import Axios from "axios"
import {useMutation} from "react-query"
import {useState, useContext, createContext} from "react"

const axios = Axios.create({
  baseURL: "https://localhost:3000"
})

const AuthContext = createContext({})

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

export const useAuth = () => useContext(AuthContext)
export default AuthProvider
