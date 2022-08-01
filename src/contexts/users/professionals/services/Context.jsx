import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext } from "react";
import { useAuth } from "../../../auth/Context";

import Actions from "./Actions";
import Schema from "./Schema";
import Inputs from "./Inputs";

const ServicesContext = createContext();

const ServicesProvider = ({children}) => {
  const { user } = useAuth();

  const call = new Actions(user);

  return (
    <ServicesContext.Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

      getServices: call.getAll,
      getService: call.getById,
      createService: call.create,
      updateService: call.update,
      deleteService: call.delete,
    }}>
      {children}
    </ServicesContext.Provider>
  )
}

export default ServicesProvider
export const useServices = () => useContext(ServicesContext)
