import Axios from "~/lib/adapters/axios";

function Actions(user) {
  const {token} = user
  const config = { headers: { Authorization: token } }

  // Professional User
  this.create = async data => 
    await Axios.post("connections", {
      connection: {...data}
    }, config)

  this.getSubscribers = async() => {
    const {data} = await Axios.get("subscribers", config)
    return data.included
  }

  this.getClientele = async() => {
    const {data} = await Axios.get("clientele", config)
    return data.included
  }

  // Client User
  this.getSubscriptions = async() => {
    const {data} = await Axios.get("subscribed_to", config)
    return data.included
  }

  this.getMyProfessionals = async() => {
    const {data} = await Axios.get("my_professionals", config)
    return data.included
  }

  this.delete = async id =>
    await Axios.delete(`connections/${id}`, config)
}

export default Actions;
