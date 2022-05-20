import Inputs from "./Inputs"
import Schema from "./Schema"
import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/context/auth/Context"
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
