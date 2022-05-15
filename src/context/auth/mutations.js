import Axios from "@/utils/axios"
import {useStorage} from "@/hooks/useStorage"

const signUpData = data => {
  const {contact_number} = data

  switch (contact_number.charAt(0)) {
    case "0": // to allow 09 format
      contact_number.substring(1) 
      break
    case "6": // to allow 639 formant
      contact_number.substring(2) 
      break
    case "+": // to allow +639 format
      contact_number.substring(3) 
      break
  }

  return data
}

// login and signup
const authenticate = async (endpoint, data) => {
  return await Axios.post(endpoint, 
    { user: endpoint === "login"
      ? {...data} 
      : {...signUpData(data)}
    })
}

const logout = async () => {
  await Axios.delete("logout")
  storage.removeItem({type: "session", key: "auth_token"})
}

export {authenticate, logout}
