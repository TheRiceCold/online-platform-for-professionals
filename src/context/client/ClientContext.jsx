import {useContext, createContext} from "react"

const ClientContext = createContext({})

const ClientProvider = ({children}) => {

  return (
    <ClientContext.Provider>
      {children}
    </ClientContext.Provider>
  )
}

export const useClient = () => {
  useContext(ClientContext)
}

export default ClientContext
