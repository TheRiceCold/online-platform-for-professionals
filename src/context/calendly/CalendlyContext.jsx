import {useContext, createContext} from "react"

const CalendlyContext = createContext({})

const CalendlyProvider = ({children}) => {

  return (
    <CalendlyContext.Provider>
      {children}
    </CalendlyContext.Provider>
  )
}

export const useCalendly = () => {
  useContext(CalendlyContext)
}

export default CalendlyContext
