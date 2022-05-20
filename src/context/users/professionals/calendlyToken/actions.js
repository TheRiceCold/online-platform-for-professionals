import Axios from "@/utils/axios"

function Actions(user) {
  const {token} = user
  const path = id => `professionals/${id}/calendly_tokens`
  const config = { headers: { Authorization: token } }

  this.getById = async (professionalId, id) => { 
    const url = path(professionalId)+id
    return await Axios.get(url, config)
  }

  this.create = async (professionalId, data) => { 
    const url = path(professionalId)
    return await Axios.post(url, data, config)
  }

  this.update = async (professionalId, id, data) => {
    const url = path(professionalId)+id
    return await Axios.patch(url, data, config)
  }

  this.delete = async (professionalId, id) => {
    const url = path(professionalId)+id
    return await Axios.delete(url, config)
  }
}

export default Actions
