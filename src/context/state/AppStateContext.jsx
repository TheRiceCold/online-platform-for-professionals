import {useReducer, useContext, createContext} from "react"

const initialState = { token: null, role: "" }

// ACTION TYPES
const LOCAL = Symbol("LOCAL")
const SESSION = Symbol("SESSION")
const LOGOUT = Symbol("LOGOUT")

// REDUCER
const reducer = (state, action) => {
  switch(action.type) {
    case SESSION:
      return {...state, token: action.payload}
    case LOCAL:
      return state
    case LOGOUT:
      return state
    default:
      return state
  }
}

const AppStateContext = createContext(
  [initialState, () => initialState])

const AppStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = {
    session: {
      action: SESSION,
      payload: ""
    },
    local: {
      action: LOCAL,
      payload: ""
    },
    logout: {
      action: LOGOUT,
      payload: ""
    }
  }

  return (
    <AppStateContext.Provider value={{
      SESSION, LOCAL, LOGOUT,
      state, dispatch, actions
    }}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider
export const useAppState = () => useContext(AppStateContext)
