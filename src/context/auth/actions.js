import Axios from "@/utils/axios"

const Action = {
  signup: async data => {
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

    const submittedData = {user: {...data}}
    return await Axios.post("signup", submittedData)
  },

  login: async data => {
    const submittedData = {user:{...data}}
    return await Axios.post("login", submittedData)
  },

  logout: async () => {
    await Axios.delete("logout")
  }
}

export default Action
