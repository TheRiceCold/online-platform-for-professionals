import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const config = { headers: { Authorization: token } }

  this.create = async data => 
    await Axios.post("connections", {
      connection: {...data}
    }, config)

  this.getSubscribers = async() => 
    await Axios.get("subscribers", config)

  this.getClientele = async() => 
    await Axios.get("clientele", config)

  this.getSubscriptions = async() =>
    await Axios.get("subscribed_to", config)

  this.getMyProfessionals = async() =>
    await Axios.get("my_professionals")

  this.delete = async id =>
    await Axios.delete(`connections/${id}`, config)
}

export default Actions
