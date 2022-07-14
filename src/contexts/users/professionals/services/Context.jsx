import Inputs from "./Inputs"
import Schema from "./Schema"
import Actions from "./Actions"

import {useAuth} from "@/auth_context"
import {createContext, useContext} from "react"
import {zodResolver} from "@hookform/resolvers/zod"

const ServicesContext = createContext()

const ServicesProvider = ({children}) => {
  const {Provider} = ServicesContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

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
export const useServices = () => useContext(ServicesContext)
