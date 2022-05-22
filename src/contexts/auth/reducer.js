export function reducer(state, action) {
  const {payload} = action

  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuth: true,
        id: payload.id,
        token: payload.token,
        attributes: payload.attributes,
      }

    case "REGISTER_PROFESSIONAL":
      const professionalId = payload?.included[0]?.relationships?.professional?.data.id
      console.log(professionalId)
      return { 
        ...state, 
        professionalId 
      }

    case "LOGOUT":
      return {
        ...state,
        id: "",
        token: "",
        isAuth: false,
        attributes: "",
      }
    default:
      return state
  }
}
