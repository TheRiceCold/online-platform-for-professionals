import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const path = `professionals/${user.professionalId}/calendly_tokens`
  const config = { headers: { Authorization: token } }

  this.getById = async id => await Axios.get(path+id, config)

  this.create = async data => 
    await Axios.post(path, { 
      calendly_token: { ...data } 
    }, config)

  this.update = async (id, data) => await Axios.patch(path+id, data, config)
  
  this.delete = async id => await Axios.delete(path+id, config)
}

export default Actions
