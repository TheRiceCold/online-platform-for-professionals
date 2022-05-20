import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/context/auth/Context"

const WorkPortfolioContext = createContext()

const WorkPortfolioProvider = ({children}) => {
  const {Provider} = WorkPortfolioContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
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

export default WorkPortfolioProvider
