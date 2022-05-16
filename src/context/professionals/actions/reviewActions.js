import Axios from "@/utils/axios"

const ReviewActions = user => {
  const {token} = user
  const config = {headers: { Authorization: token }}
  const path = id => `professionals/${id}/reviews/`

  return {
    // GET
    getAll: async professionalId => { 
      const url = path(professionalId)
      return await Axios.get(url, config)
    },

    getById: async (professionalId, id) => { 
      const url = path(professionalId)+id
      return await Axios.get(url, config)
    },

    // MUTATIONS
    create: async (professionalId, data) => { 
      const url = path(professionalId)
      return await Axios.post(url, data, config)
    },

    update: async (professionalId, id, data) => {
      const url = path(professionalId)+id
      return await Axios.patch(url, data, config)
    },

    delete: async (professionalId, id) => {
      const url = path(professionalId)+id
      return await Axios.delete(url, config)
    }
  }
}

export default ReviewActions
