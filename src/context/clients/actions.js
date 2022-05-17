import Axios from "@/utils/axios"

function Actions(user) {
  const {token} = user
  const path = "clients/"
  const config = { headers: { Authorization: token } }

  this.getAll = async () => await Axios.get(path, config)

  this.getById = async id =>  
    await Axios.get(path+id, config)

  this.delete = async id => 
    await Axios.delete(path+id, config)
}

export default Actions
