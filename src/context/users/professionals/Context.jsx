import {navLinks} from "./navLinks"
import {createContext} from "react"
import {useRouter} from "next/router"
import {userMenuItems} from "./userMenuItems"
import {useAuth} from "@/context/auth/Context"
import {zodResolver} from "@hookform/resolvers/zod"

import Schema from "./Schema"
import Inputs from "./Inputs"

// Actions
import Actions from "./Actions"
import ReviewsProvider from "./reviews/Context"
import ServicesProvider from "./services/Context"
import WorkPortfolioProvider from "./services/Context"
import CalendlyTokenProvider from "./calendlyToken/Context"

const ProfessionalsContext = createContext()

const ProfessionalsProvider = ({children}) => {
  const {Provider} = ProfessionalsContext
  const {user, logout} = useAuth()
  const router = useRouter()

  const call = new Actions(user)

  const menuItems = openSettings => 
    userMenuItems(user, router, logout, openSettings)

  return (
    <Provider value={{
      menuItems,
      navLinks: navLinks(user.professionalId),

      // Form
      inputs: Inputs, 
      resolver: zodResolver(Schema),

      // User Details
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
    }}>
      <CalendlyTokenProvider>
        <ServicesProvider>
          <WorkPortfolioProvider>
            <ReviewsProvider>
              {children}
            </ReviewsProvider>
          </WorkPortfolioProvider>
        </ServicesProvider>
      </CalendlyTokenProvider>
    </Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}