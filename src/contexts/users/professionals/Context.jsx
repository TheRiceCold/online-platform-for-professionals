import { zodResolver} from "@hookform/resolvers/zod";
import { useDisclosure } from "@chakra-ui/react";
import { userMenuItems } from "./userMenuItems";
import { userNavLinks } from "./userNavLinks";
import { useAuth} from "../../auth/Context";
import { createContext } from "react";

import WorkPortfoliosProvider from "./work_portfolios/Context";
import CalendlyTokenProvider from "./calendly_token/Context";
import ServicesProvider from "./services/Context";
import Schema from "./Schema";
import Inputs from "./Inputs";
import Actions from "./Actions"

const ProfessionalsContext = createContext();

const ProfessionalsProvider = ({children}) => {
  const {user, logout} = useAuth();
  const call = new Actions(user);

  const menuItems = modals => 
    userMenuItems(modals, logout);

  const navModals = {
    clientele: useDisclosure(),
    subscribers: useDisclosure()
  };

  const navLinks = userNavLinks(user.professionalId, navModals);

  return (
    <ProfessionalsContext.Provider value={{
      navLinks,
      menuItems,
      navModals,

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
      getUserProfessional: call.getUser,

      createProfessional: call.create,
      updateProfessional: call.update,
      deleteProfessional: call.delete,
    }}>
      <CalendlyTokenProvider>
        <ServicesProvider>
          <WorkPortfoliosProvider>
            {children}
          </WorkPortfoliosProvider>
        </ServicesProvider>
      </CalendlyTokenProvider>
    </ProfessionalsContext.Provider>
  )
}

export {
  ProfessionalsContext,
  ProfessionalsProvider, 
}
