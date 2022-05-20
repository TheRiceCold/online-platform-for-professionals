import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/context/auth/Context"

const ServicesContext = createContext()

const ServicesProvider = ({children}) => {
  const {Provider} = ServicesContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
      getServices: call.getAll,
      getService: call.getById,
      createService: call.create,
      updateService: call.update,
      deleteService: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export default ServicesProvider
