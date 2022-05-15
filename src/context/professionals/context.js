import {createContext} from "react"
import Actions from "./actions/actions"
import ServiceActions from "./actions/serviceActions"
import {useAppState} from "@/context/state/context"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()
  const call = Actions(user)
  const callService = ServiceActions(user) 

  return (
    <Provider value={{
      getProfessionals: call.getAll,
      getProfessional: call.getById,
      createProfessional: call.create,
      updateProfessional: call.update,
      deleteProfessional: call.delete,

      // Professional Services
      getServices: callService.getAll,
      getService: callService.getById,
      createService: callService.create,
      updateService: callService.update,
      deleteService: callService.delete,

    }}>
      {children}
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
