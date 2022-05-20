import {createContext} from "react"

const UsersContext = createContext()

const UsersProvider = ({children}) => {
  const {Provider} = UsersContext

  return (
    <Provider value={{}}>
      {children}
    </Provider>
  )
}

export {
  UsersContext,
  UsersProvider,
}
