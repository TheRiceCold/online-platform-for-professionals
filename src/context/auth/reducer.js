export const reducer = (initialState, action) => {
  const {payload} = action

  switch (action.type) {
    case "LOGIN":
      return {
        ...initialState,
        isAuth: true,
        id: payload.id,
        role: payload.role,
        token: payload.token,
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
