import {navLinks} from "./navLinks"
import {createContext} from "react"
import {zodResolver} from "@hookform/resolvers/zod"
import {useAppState} from "@/context/state/Context"

import Schema from "./Schema"
import Inputs from "./Inputs"

// Actions
import Actions from "./Actions"
import ReviewActions from "./reviews/Actions"
import ServiceActions from "./services/Actions"
import PortfolioActions from "./portfolio/Actions"
import CalendlyTokenActions from "./calendlyToken/Actions"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const call = new Actions(user)
  const callReviews = new ReviewActions(user)
  const callServices = new ServiceActions(user) 
  const callPortfolios = new PortfolioActions(user)
  const callCalendlyToken = new CalendlyTokenActions(user)
  const userImg = "https://avatars.dicebear.com/api/male/username.svg" 

  return (
    <Provider value={{
      navLinks: navLinks(user.id),

      // Form
      inputs: Inputs, 
      resolver: zodResolver(Schema),

      // User Details
      userImg,
      getFullname: call.getFullname,
      getLocation: call.getLocation,
      getContactInfo: call.getContactInfo,

      // User Professional
      updateUserProfessional: call.updateUser,

      // Professionals
      getProfessionals: call.getAll,
      getProfessional: call.getById,
      registerProfessional: call.create,
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

      // Professional Reviews
      getReviews: callReviews.getAll,
      getReview: callReviews.getById,
      createReview: callReviews.create,
      updateReview: callReviews.update,
      deleteReview: callReviews.delete,
    }}>
      {children}
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}