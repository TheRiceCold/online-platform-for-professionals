import Axios from "@/utils/axios"
import {capitalize} from "@/utils/stringHelpers"

function Actions(user) {
  const {token} = user
  const path = "professionals/"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => 
    await Axios.get(path, config)

  this.getById = async id => {
    const {data} = await Axios.get(path+id, config)
    return data
  }

  this.create = async data => 
    await Axios.post(path, { 
      professional: {
        user_id: user.id,
        ...data
      } 
    }, config)

  this.update = async (id, data) => {
    // await Axios.patch(path+id, data, config)
  }

  this.delete = async id => 
    await Axios.delete(path+id, config)

  // User Attributes
  this.getAttributes = async() => {
    const {included} = await this.getById(user.professionalId)
    return included[0].attributes
  }
  this.getFullname = async () => {
    const {firstName, lastName} = await this.getAttributes()
    return capitalize(`${firstName} ${lastName}`)
  }

  this.getLocation = async () => {
    const {city, region} = await this.getAttributes()
    return `${city}, ${region}, Philippines`
  }

  // Professional Attributes
  this.getContactInfo = async() => {
    const {data} = await this.getById(user.professionalId)
    return data?.attributes
  }
}

export default Actions
