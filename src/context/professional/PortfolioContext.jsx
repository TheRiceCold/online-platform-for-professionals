import {useContext, createContext} from "react"

const PortfolioContext = createContext({})

const PortfolioProvider = ({children}) => {

  return (
    <PortfolioContext.Provider>
      {children}
    </PortfolioContext.Provider>
  )
}

export const usePortfolio = () => {
  useContext(PortfolioContext)
}

export default PortfolioContext
