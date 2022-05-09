import {useReducer, useContext, createContext} from "react"

const initialState = { token: null }
const AuthStateContext = createContext([initialState, () => initialState])

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_TOKEN":
      return {...state, token: action.value}

    default:
      return state
  }
}

const AuthStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <AuthStateContext.Provider value={[state, dispatch]}>
      {children}
    </AuthStateContext.Provider>
  )
}

export default AuthStateProvider
export const useAuthState = () => useContext(AuthStateContext)
