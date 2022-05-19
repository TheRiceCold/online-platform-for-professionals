import CryptoAES from "crypto-js/aes"
import {objExist} from "@/utils/jsonHelpers"

function Statuses(storage, dispatch, setAlerts) {
  this.storage = storage
  this.dispatch = dispatch
  this.setAlerts = setAlerts

  this.onSuccess = res => {
    const {
      id, 
      relationships,
      attributes: {role}, 
    } = res?.data?.data
    const token = res.headers.authorization
    const secret = process.env.NEXT_PUBLIC_SECRET

    let authData = {
      isAuth: true,
      id, token, role,
    }

    if (role.toLowerCase() === "professional"){
      const registered = objExist(relationships.professional) 
      authData = {registered, ...authData}
    }

    this.storage.setItem({
      type: "session",
      key: "auth_data",
      value: CryptoAES.encrypt(JSON.stringify(authData), secret)
    })

    location.reload()
    // NOT_NECESSARY: page reloads after login and gets stored data
    // this.dispatch({type: "LOGIN", payload: authData})
  }

  this.onError = error => {
    const {status, data} = error?.response
    const message = data?.error

    if (status === 401) 
      this.setAlerts([{status: "error", message}])
  }
}

export default Statuses
