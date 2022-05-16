function Responses (storage, dispatch, setAlerts) {
  this.storage = storage
  this.dispatch = dispatch
  this.setAlerts = setAlerts

  this.onSuccess = res => {
    const {id, attributes} = res.data.data
    const token = res.headers.authorization
    const data = {
      id: id,
      token: token, 
      isAuth: true,
      role: attributes.role,
    }

    // TODO: set to local if remember me is true
    this.dispatch({type: "LOGIN", payload: data})
    this.storage.setItem({
      type: "session", 
      key: "auth_data",
      value: JSON.stringify(data)
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
