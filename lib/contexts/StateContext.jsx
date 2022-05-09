import {useReducer, useContext, createContext} from "react"

const initialState = { token: null }
const StateContext = createContext([initialState, () => initialState])

const reducer = (state, action) => {
  switch(action.type) {
    case "SET_TOKEN":
      return {...state, token: action.value}
    default:
      return state
  }
}

const StateProvider = ({children, reducer, initialState}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  )
}

export const useState = () => useContext(StateContext)
export default StateProvider
