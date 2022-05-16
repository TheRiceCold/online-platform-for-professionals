import Axios from "@/utils/axios"
import {useStorage} from "@/hooks/useStorage"

const Actions = {
  signup: async data => {
    const submittedData = signupData(data)
    return await Axios.post("signup", submittedData)
  },

  login: async data => {
    const submittedData = {user:{...data}}
    return await Axios.post("login", submittedData)
  },

  logout: async () => {
    console.log("logout")
    const storage = useStorage()
    await Axios.delete("logout")
    storage.removeItem({type: "session", key: "auth_data"})
  }
}

// private
const signupData = data => {
  let contactNo = data.contact_number

  switch (contactNo.charAt(0)) {
    case "0": // allow 09 format
      contactNo = contactNo.substring(1) 
      break
    case "6": // allow 639 formant
      contactNo = contactNo.substring(2) 
      break
    case "+": // allow +639 format
      contactNo = contactNo.substring(3) 
      break
  }

  data.contact_number = contactNo
  return {user: {...data}}
}

export default Actions
