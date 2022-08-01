import Actions from "./Actions";
import Schema from "./Schema";
import Inputs from "./Inputs";

import { zodResolver } from "@hookform/resolvers/zod";
import { createContext, useContext } from "react";
import { useAuth } from "../../../auth/Context";

const WorkPortfoliosContext = createContext();

const WorkPortfoliosProvider = ({ children }) => {
  const {user} = useAuth();

  const call = new Actions(user) 

  return (
    <WorkPortfoliosContext.Provider value={{
      inputs: Inputs,
      resolver: zodResolver(Schema),

      getWorkPortfolios: call.getAll,
      getWorkPortfolio: call.getById,
      createWorkPortfolio: call.create,
      updateWorkPortfolio: call.update,
      deleteWorkPortfolio: call.delete,
    }}>
      {children}
    </WorkPortfoliosContext.Provider>
  )
}

export default WorkPortfoliosProvider
export const useWorkPortfolios = () => useContext(WorkPortfoliosContext)
