export function reducer(state, action) {
  const {payload} = action

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        id: payload.id,
        role: payload.role,
        token: payload.token,
      }
    case "REGISTER_PROFESSIONAL":
      return {
        ...state,
        registered: true
      }
    case "LOGOUT":
      return {
        ...state,
        isAuth: false,
        id: "",
        role: "",
        token: "",
      }
    default:
      return state
  }
}
