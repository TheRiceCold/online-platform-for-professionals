import Inputs from "./Inputs"
import Schema from "./Schema"
import Actions from "./Actions"

import {useAuth} from "@/contexts/auth/Context"
import {createContext, useContext} from "react"
import {zodResolver} from "@hookform/resolvers/zod"

const WorkPortfoliosContext = createContext()

const WorkPortfoliosProvider = ({children}) => {
  const {Provider} = WorkPortfoliosContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

      getWorkPortfolios: call.getAll,
      getWorkPortfolio: call.getById,
      createWorkPortfolio: call.create,
      updateWorkPortfolio: call.update,
      deleteWorkPortfolio: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export default WorkPortfoliosProvider
export const useWorkPortfolios = () => useContext(WorkPortfoliosContext)
