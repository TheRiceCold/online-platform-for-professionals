import {useAuth} from "../auth/AuthContext"
import {useStorage} from "@/hooks/useStorage"
import {useContext, createContext} from "react"

const UserContext = createContext({})

const UserProvider = ({children}) => {
  const storage = useStorage()
  const {rememberUser} = useAuth()

  const storageType = rememberUser ? "local" : "session"
  const authData = storage.getItem({type: storageType, key: "auth"})
  const attributes = JSON.parse(authData)?.attr

  const checkUserRole = role => 
    attributes?.role?.toLowerCase() === role.toLowerCase()

  const isAdmin = checkUserRole("admin")
  const isClient = checkUserRole("client")
  const isProfessional = checkUserRole("professional")

  const user = {
    fullname: attributes?.firstName + " " + attributes?.lastName,
    role: attributes?.role,
    city: attributes?.city,
    field: attributes?.field,
    region: attributes?.region,
  }

  return (
    <UserContext.Provider value={{
      user, isAdmin, isClient, isProfessional
    }}>
      {children} 
    </UserContext.Provider>
  )
}

export default UserProvider
export const useUser = () => useContext(UserContext)
