import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const config = { headers: { Authorization: token } }

  // Professional User
  this.create = async data => 
    await Axios.post("connections", {
      connection: {...data}
    }, config)

  this.getSubscribers = async() => 
    await Axios.get("subscribers", config)

  this.getClientele = async() => 
    await Axios.get("clientele", config)


  // Client User
  this.getSubscriptions = async() => {
    const {data} = await Axios.get("subscribed_to", config)
    return data.data
  }

  this.getMyProfessionals = async() => {
    const {data} = await Axios.get("my_professionals", config)
    return data.data
  }

  this.delete = async id =>
    await Axios.delete(`connections/${id}`, config)
}

export default Actions
