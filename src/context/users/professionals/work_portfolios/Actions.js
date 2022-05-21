import Axios from "@/utils/axios"

function Actions(user) {
  const {token} = user
  const config = {headers: { Authorization: token }}
  const path = `professionals/${user.professionalId}/work_portfolios`

  this.getAll = async () => {
    const {data} = await Axios.get(path, config)
    return data.data
  }

  this.getById = async (professionalId, id) => { 
    const url = path(professionalId)+id
    return await Axios.get(url, config)
  }

  this.create = async data => 
    await Axios.post(path, data, config)

  this.update = async data => {
    const id = data.selectedId
    const url = path+"/"+id
    delete data.selectedId
    return await Axios.patch(url, data, config)
  }

  this.delete = async id => {
    console.log(id)
  }
}

export default Actions
