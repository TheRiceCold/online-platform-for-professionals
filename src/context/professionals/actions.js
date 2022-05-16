import Axios from "@/utils/axios"

const Actions = user => {
  const {token} = user
  const path = "professionals/"
  const config = { 
    headers: { 
      Accept: "application/json",
      Authorization: token 
    } 
  }

  return {
    // GET
    getAll: async () => { 
      console.log("getAll")
      return await Axios.get(path, config)
    },
    getById: async ({queryKey})=> { 
      const [_, id] = queryKey
      return await Axios.get(path+id, config)
    },

    // MUTATIONS
    create: async data => { 
      console.log("Create Professional: ", data)
      return await Axios.post(path, { professional: {...data} }, config)
    },
    update: async (id, data) => {
      console.log("Update Professional: ", data)
      return await Axios.patch(path+id, data, config)
    },
    delete: async id => {
      console.log("Deleted Professional: ", id)
      return await Axios.delete(path+id, config)
    }
  }
}

export default Actions
