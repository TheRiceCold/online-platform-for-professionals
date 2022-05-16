function Responses (setAlerts) {
  this.setAlerts = setAlerts

  this.onError = error => {
    const {status, data} = error?.response
    const messages = data.errors.map(error => error.title)

    if (status === 400) {
      this.setAlerts(
        messages.map(message => {
          return { status: "error", message }
        })
      )
    }
  }

  this.onSuccess = res => {
    this.setAlerts([{ 
      status: "success", 
      message: "Email confirmation has been sent" 
    }])
  }
}

export default Responses
