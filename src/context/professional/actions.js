import Axios from "@/utils/axios"

const Actions = user => {
  const {token} = user
  const path = "professionals/"

  return {
    // GET
    getAll: async () => { 
      return Axios.get(path, {
        headers: { 'Authorization': token }
      })
    },
    getById: async id => { 
      return Axios.get(path+id, {
        headers: { 'Authorization': token }
      })
    },

    // MUTATIONS
    create: async data => { 
      return Axios.post(path, data, {
        headers: { 'Authorization': token }
      })
    },
    update: async (id, data) => {
      return Axios.patch(path+id, data, {
        headers: { 'Authorization': token }
      })
    },
    delete: async id => {
      return Axios.delete(path+id, {
        headers: { 'Authorization': token }
      })
    }
  }
}

export default Actions
