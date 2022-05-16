import Axios from "@/utils/axios"

const Actions = user => {
  const {token} = user
  const path = "professionals/"

  return {
    // GET
    getAll: async () => { 
      const {data} = await Axios.get(path, 
        { headers: { 'Authorization': token }
      })
      return data
    },
    getById: async ({queryKey})=> { 
      const [_, id] = queryKey
      return await Axios.get(path+id, {
        headers: { 'Authorization': token }
      })
    },

    // MUTATIONS
    create: async data => { 
      console.log("Create Professional: ", data)
      return await Axios.post(path, 
        { professional: {...data} }, 
        { headers: { 'Authorization': token }
      })
    },
    update: async (id, data) => {
      console.log("Update Professional: ", data)
      return await Axios.patch(path+id, data, {
        headers: { 'Authorization': token }
      })
    },
    delete: async id => {
      console.log("Deleted Professional: ", id)
      return await Axios.delete(path+id, {
        headers: { 'Authorization': token }
      })
    }
  }
}

export default Actions
