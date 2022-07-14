function Statuses(setAlerts) {
  this.setAlerts = setAlerts

  this.onError = error => {
    const {status, data} = error?.response
    const messages = data?.errors.map(error => error.title)

    if (status === 400) {
      this.setAlerts(
        messages.map(message => {
          return { status: "error", message }
        })
      )
    }
  }

  this.onSuccess = res => {
    this.setAlerts(
      res?.data.meta.map(({message}) => {
        return { status: "success", message }
      })
    )
  }
}

export default Statuses
