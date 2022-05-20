import {useContext, createContext} from "react"

import Actions from "./Actions"

const ConnectionsContext = createContext()

const ConnectionsProvider = ({children}) => {
  const {Provider} = ConnectionsContext
  const {user} = useAuth()

  const call = new Actions(user)

  return (
    <Provider value={{ 
      createConnection: call.create,
      getSubscribers: call.getSubscribers,
      getClientele: call.getClientele,
      getSubscriptions: call.getSubscriptions,
      getMyProfessionals: call.getMyProfessionals,
      deleteConnection: call.delete
    }}>
      {children}
    </Provider>
  )
}

export default ConnectionsProvider
export const useConnections = () => useContext(ConnectionsContext)
