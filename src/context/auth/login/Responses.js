import CryptoAES from "crypto-js/aes"

function Responses (storage, dispatch, setAlerts) {
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

    // const ciphertext = CryptoAES.encrypt(data, secret)
    // const _ciphertext = CryptoAES.decrypt(ciphertext.toString(), secret)
    // console.log(_ciphertext.toString(CryptoENC))

    // TODO: set to local if remember me is true
    this.dispatch({type: "LOGIN", payload: data})
    this.storage.setItem({
      type: "session", 
      key: "auth_data",
      value: CryptoAES.encrypt(data, secret)
    })

    location.reload()
  }

  this.onError = error => {
    const {status, data} = error?.response
    const message = data?.error

    if (status === 401) 
      this.setAlerts([{status: "error", message}])
  }
}

export default Responses
