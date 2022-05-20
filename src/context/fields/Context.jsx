import {useContext, createContext} from "react"

const FieldsContext = createContext()

const FieldsProvider = ({children}) => {
  const {Provider} = ConnectionsContext

  return (
    <Provider value={{ }}>
      {children}
    </Provider>
  )
}

export default FieldsProvider
export const useFields = () => useContext(FieldsContext)
