import {createContext} from "react"
import {useAppState} from "@/context/state/context"
// Actions
import Actions from "./actions/actions"
import ServiceActions from "./actions/serviceActions"
import PortfolioActions from "./actions/PortfolioActions"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const call = Actions(user)
  const callService = ServiceActions(user) 
  const callPortfolio = PortfolioActions(user)

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

      // Professional Work Portfolio
      getWorkPortfolios: callPortfolio.getAll,
      getWorkPortfolio: callPortfolio.getById,
      createWorkPortfolio: callPortfolio.create,
      updateWorkPortfolio: callPortfolio.update,
      deleteWorkPortfolio: callPortfolio.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
