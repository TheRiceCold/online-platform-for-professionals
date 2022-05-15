import Axios from "@/utils/axios"

const ServiceActions = user => {
  const {token} = user
  const path = id => `professionals/${id}/services/`

  return {
    // GET
    getAll: async professionalId => { 
      console.log(token)
      const {data} = await Axios.get(
        path(professionalId), 
        { headers: { 'Authorization': token }
      })
      return data
    },
    getById: async (professionalId, id) => { 
      return await Axios.get(
        path(professionalId)+id, 
        { headers: { 'Authorization': token }
      })
    },

    // MUTATIONS
    create: async professionalId => { 
      return await Axios.post(
        path(professionalId), data, 
        { headers: { 'Authorization': token }
      })
    },
    update: async (professionalId, id, data) => {
      return await Axios.patch(
        path(professionalId)+id, data, 
        { headers: { 'Authorization': token }
      })
    },
    delete: async (professionalId, id) => {
      return await Axios.delete(
        path(professionalId)+id, 
        { headers: { 'Authorization': token }
      })
    }
  }
}

export default ServiceActions
