import Axios from "@/utils/axios"

function Actions(storage) {
  this.storage = storage

  this.signup = async data => {
    return await Axios.post("signup", this.signupData(data))
  }

  this.login = async data => {
    return await Axios.post("login", { user: {...data} })
  }

  this.logout = async () => {
    this.storage.removeItem({ type: "session", key: "auth_data" })
    await Axios.delete("logout")
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
