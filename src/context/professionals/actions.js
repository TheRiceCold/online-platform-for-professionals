import Axios from "@/utils/axios"

function Actions (user) {
  const {token} = user
  const path = "professionals/"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => 
    await Axios.get(path, config)

  this.getById = async ({queryKey}) => { 
    const [_, id] = queryKey
    return await Axios.get(path+id, config)
  }

  this.create = async data => 
    await Axios.post(path, { professional: {...data} }, config)

  this.update = async (id, data) => 
    await Axios.patch(path+id, data, config)

  this.delete = async id => 
    await Axios.delete(path+id, config)
}

export default Actions
