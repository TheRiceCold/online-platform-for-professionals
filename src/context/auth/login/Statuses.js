import CryptoAES from "crypto-js/aes"

function Statuses(storage, dispatch, setAlerts) {
  this.storage = storage
  this.dispatch = dispatch
  this.setAlerts = setAlerts

  this.onSuccess = res => {
    const {id, attributes} = res.data.data
    const token = res.headers.authorization
    const secret = process.env.NEXT_PUBLIC_SECRET
    const data = JSON.stringify({
      id: id,
      token: token, 
      isAuth: true,
      role: attributes.role,
    })

    this.storage.setItem({
      type: "session", 
      key: "auth_data",
      value: CryptoAES.encrypt(data, secret)
    })

    // NOT_NECESSARY: page reloads after login and gets stored data
    // this.dispatch({type: "LOGIN", payload: data})

    location.reload()
  }

  this.onError = error => {
    const {status, data} = error?.response
    const message = data?.error

    if (status === 401) 
      this.setAlerts([{status: "error", message}])
  }
}

export default Statuses
