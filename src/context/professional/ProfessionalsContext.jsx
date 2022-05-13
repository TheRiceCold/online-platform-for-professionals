import {useContext, createContext} from "react"

const ProfessionalsContext = createContext({})

const ProfessionalsProvider = ({children}) => {

  return (
    <ProfessionalsContext.Provider>
      {children}
    </ProfessionalsContext.Provider>
  )
}

export const useProfessionals = () => {
  useContext(ProfessionalsContext)
}

export default ProfessionalsContext
