import {createContext} from "react"
import {useAppState} from "@/context/state/context"
// Actions
import Actions from "./actions/actions"
import ServiceActions from "./actions/serviceActions"
import PortfolioActions from "./actions/PortfolioActions"
import CalendlyTokenActions from "./actions/CalendlyTokenActions"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const call = Actions(user)
  const callServices = ServiceActions(user) 
  const callPortfolios = PortfolioActions(user)
  const callCalendlyToken = CalendlyTokenActions(user)

  return (
    <Provider value={{
      getProfessionals: call.getAll,
      getProfessional: call.getById,
      createProfessional: call.create,
      updateProfessional: call.update,
      deleteProfessional: call.delete,

      // Professional Services
      getServices: callServices.getAll,
      getService: callServices.getById,
      createService: callServices.create,
      updateService: callServices.update,
      deleteService: callServices.delete,

      // Professional Work Portfolio
      getWorkPortfolios: callPortfolios.getAll,
      getWorkPortfolio: callPortfolios.getById,
      createWorkPortfolio: callPortfolios.create,
      updateWorkPortfolio: callPortfolios.update,
      deleteWorkPortfolio: callPortfolios.delete,

      // Professional Calendly Tokens
      getCalendlyToken: callCalendlyToken.getById,
      createCalendlyToken: callCalendlyToken.create,
      updateCalendlyToken: callCalendlyToken.update,
      deleteCalendlyToken: callCalendlyToken.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
