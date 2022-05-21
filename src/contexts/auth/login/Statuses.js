import CryptoAES from "crypto-js/aes"

function Statuses(storage, dispatch, setAlerts) {
  this.storage = storage
  this.dispatch = dispatch
  this.setAlerts = setAlerts

  this.onSuccess = res => {
    const {
      id, 
      attributes,
      relationships,
    } = res?.data?.data

    const token = res.headers.authorization
    const secret = process.env.NEXT_PUBLIC_SECRET

    let authData = {
      id, 
      token, 
      attributes,
      isAuth: true,
    }

    const role = attributes?.role.toLowerCase()
    switch(role){
      case "professional":
        const professionalId = relationships?.professional?.data.id
        authData = {professionalId, ...authData}
        break
      case "client":
        const clientId = relationships?.client?.data.id
        authData = {clientId, ...authData}
        break
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
