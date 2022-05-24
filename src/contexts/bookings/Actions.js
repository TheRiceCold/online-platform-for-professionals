import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const path = "bookings"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => {
    const {data} = await Axios.get(path, config)
    return data
  }

  this.getByFilter = async ({queryKey})=> {
    const [_, status] = queryKey
    const {data} = await Axios.get(path+`?status=${status}`, config)
    return data
  }

  this.getById = async id => { 
    const url = `${path}/${id}`
    return await Axios.get(url, config)
  }

  this.create = async ({showedUp, email}) => { 
    const url = `professionals/${user.professionalId}/bookings?invitee_email=${email}`
    return await Axios.post(url, {
      client_showed_up: showedUp,
      finished: true
    }, config)
  }

  this.update = async (id, data) => {
    const url = `${path}/${id}`
    return await Axios.patch(url, data, config)
  }

  this.delete = async id => {
    const url = `professionals/${user.professionalId}/bookings/${id}`
    return await Axios.delete(url, config)
  }

  this.cancel = async (uuid, calendlyToken, reason) => {
    const baseUrl = "https://api.calendly.com"
    return await Axios.post(
      `${baseUrl}/scheduled_events/${uuid}/cancellation`,
      { reason },
      { headers: 
        { Authorization: `Bearer ${calendlyToken}`}
      }
    )
  }
}

export default Actions
