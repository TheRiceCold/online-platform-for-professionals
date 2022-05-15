import Axios from "@/utils/axios"

const Actions = user => {
  const {token} = user
  const path = "clients/"

  return {
    getAll: async () => { 
      console.log(token)
      const {data} = await Axios.get(path, {
        headers: { 'Authorization': token }
      })
      return data
    },
    getById: async id => { 
      return await Axios.get(path+id, {
        headers: { 'Authorization': token }
      })
    },
    delete: async id => {
      return await Axios.delete(path+id, {
        headers: { 'Authorization': token }
      })
    }
  }
}

export default Actions
