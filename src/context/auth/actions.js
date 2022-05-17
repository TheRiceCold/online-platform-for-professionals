import Axios from "@/utils/axios"
import {useStorage} from "@/hooks/useStorage"

function Actions(dispatch) {
  const storage = useStorage()

  this.signup = async data => 
    await Axios.post("signup", this.signupData(data))

  this.login = async data => 
    await Axios.post("login", { user: {...data} })

  this.logout = async () => {
    storage.removeItem({ type: "session", key: "auth_data" })
    await Axios.delete("logout")
    dispatch({type: "LOGOUT"})
    location.reload()
  }

  // private
  this.signupData = data => {
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
    return { user: {...data} }
  }
}

export default Actions
