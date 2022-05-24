import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const path = "bookings"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => {
    const {data} = await Axios.get(path, config)
    return data
  }

  this.getByFilter = async ({queryKey})=> {
    const [_, status] = queryKey
    const {data} = await Axios.get(path+`?status=${status}`, config)
    return data
  }

  this.getById = async id => { 
    const url = `${path}/${id}`
    return await Axios.get(url, config)
  }

  this.create = async data => { 
    const url = `professionals/${user.professionalId}/bookings?`
    return await Axios.post(url, data, config)
  }

  this.update = async (id, data) => {
    const url = `${path}/${id}`
    return await Axios.patch(url, data, config)
  }

  this.delete = async id => {
    const url = `professionals/${user.professionalId}/bookings/${id}`
    return await Axios.delete(url, config)
  }
}

export default Actions
