import Actions from "./Actions"

import {useAuth} from "@/contexts/auth/Context"
import {createContext, useContext} from "react"

const CalendlyTokenContext = createContext()

const CalendlyTokenProvider = ({children}) => {
  const {Provider} = CalendlyTokenContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
      inputs: [{ 
        id: "authorization",
        label: "Calendly Token",
      }],

      getCalendlyToken: call.getById,
      createCalendlyToken: call.create,
      updateCalendlyToken: call.update,
      deleteCalendlyToken: call.delete,
    }}>
      {children}
    </Provider>
  )
}

export default CalendlyTokenProvider

export const useCalendlyToken = () => useContext(CalendlyTokenContext)
