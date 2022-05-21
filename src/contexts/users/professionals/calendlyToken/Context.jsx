import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/contexts/auth/Context"

const CalendlyTokenContext = createContext()

const CalendlyTokenProvider = ({children}) => {
  const {Provider} = CalendlyTokenContext
  const {user} = useAuth()

  const call = new Actions(user) 

  return (
    <Provider value={{
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
