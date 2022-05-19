import CryptoAES from "crypto-js/aes"

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

    const registered = !Object.entries(relationships).length === 0

    const authData = {
      isAuth: true,
      id, token, role,
    }

    if (role.toLowerCase() === "professional")
      authData.registered = registered

    this.storage.setItem({
      type: "session",
      key: "auth_data",
      value: CryptoAES.encrypt(JSON.stringify(authData), secret)
    })

    // NOT_NECESSARY: page reloads after login and gets stored data
    this.dispatch({type: "LOGIN", payload: data})

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
