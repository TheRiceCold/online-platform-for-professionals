import Actions from "./Actions";

import { createContext, useContext } from "react";
import { useAuth } from "../../../auth/Context";

const CalendlyTokenContext = createContext();

const CalendlyTokenProvider = ({ children }) => {
  const { user } = useAuth();
  const call = new Actions(user);

  return (
    <CalendlyTokenContext.Provider value={{
      inputs: [{ 
        id: "authorization",
        label: "Calendly Token",
      }],

      getCalendlyToken: call.get,
      createCalendlyToken: call.create,
      updateCalendlyToken: call.update,
      deleteCalendlyToken: call.delete,

      // events
      postCancelEvent: call.cancel,
    }}>
      {children}
    </CalendlyTokenContext.Provider>
  );
}

export default CalendlyTokenProvider;

export const useCalendlyToken = () => useContext(CalendlyTokenContext);
