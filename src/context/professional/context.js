import Actions from "./actions"
import {createContext} from "react"
import {useAppState} from "@/context/state/context"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()
  const call = Actions(user)

  return (
    <Provider value={{
      getProffesionals: call.getAll,
      getProffesional: call.getById,
      createProffesional: call.create,
      updateProfessional: call.update,
      deleteProfessional: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
