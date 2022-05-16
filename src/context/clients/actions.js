import Axios from "@/utils/axios"

const Actions = user => {
  const {token} = user
  const path = "clients/"
  const config = {headers: { Authorization: token }}

  return {
    getAll: async () => {
      return await Axios.get(path, config)
    },

    getById: async id => { 
      return await Axios.get(path+id, config)
    },

    delete: async id => {
      return await Axios.delete(path+id, config)
    }
  }
}

export default Actions
