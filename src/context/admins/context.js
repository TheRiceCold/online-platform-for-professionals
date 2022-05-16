import {createContext} from "react"

const AdminContext = createContext()

const AdminProvider = ({children}) => {
  const {Provider} = AdminContext

  return (
    <Provider value={{ }}>
      {children}
    </Provider>
  )
}

export {
  AdminContext,
  AdminProvider,
}
