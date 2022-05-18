import Axios from "@/utils/axios"

function Actions(user) {
  const {token, id} = user
  const path = "professionals/"
  const config = { headers: { Authorization: token } }
  console.log(id)

  this.getAll = async () => 
    await Axios.get(path, config)

  this.getById = async () => {
    const {data} = await Axios.get(path+id, config)
    return data
  }

  this.create = async data => 
    await Axios.post(path, { professional: {...data} }, config)

  this.update = async ({queryKey}, data) => {
    // await Axios.patch(path+id, data, config)
  }

  this.delete = async id => 
    await Axios.delete(path+id, config)
}

export default Actions
