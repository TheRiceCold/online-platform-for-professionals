import {useContext, createContext} from "react"

const ServicesContext = createContext({})

const ServicesProvider = ({children}) => {

  return (
    <ServicesContext.Provider>
      {children}
    </ServicesContext.Provider>
  )
}

export const useServices = () => {
  useContext(ServicesContext)
}

export default ServicesContext

