import Actions from "./actions"
import {createContext} from "react"
import {useAppState} from "@/context/state/Context"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {
  const {Provider} = ClientsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()
  const call = new Actions(user)

  return (
    <Provider value={{
      getClients: call.getAll,
      getClient: call.getById,
      deleteClient: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ClientsContext,
  ClientsProvider
}