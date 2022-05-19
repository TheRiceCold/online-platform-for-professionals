import Axios from "@/utils/axios"

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
}

export default Actions
