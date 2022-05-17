import Axios from "@/utils/axios"

function Actions(user) {
  const {token} = user
  const path = "professionals/"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => 
    await Axios.get(path, config)

  this.getById = async ({queryKey}) => { 
    const [_, id] = queryKey
    const res = await Axios.get(path+id, config)
    return res
  }

  this.create = async data => 
    await Axios.post(path, { professional: {...data} }, config)

  this.update = async ({queryKey}, data) => {
    console.log(queryKey)
    // await Axios.patch(path+id, data, config)
  }

  this.delete = async id => 
    await Axios.delete(path+id, config)
}

export default Actions
