import Axios from "@/utils/axios"

const CalendlyTokenActions = user => {
  const {token} = user
  const config = {headers: { Authorization: token }}
  const path = id => `professionals/${id}/calendly_tokens`

  return {
    getById: async (professionalId, id) => { 
      const url = path(professionalId)+id
      return await Axios.get(url, config)
    },

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

export default CalendlyTokenActions

