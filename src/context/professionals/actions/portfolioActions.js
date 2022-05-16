import Axios from "@/utils/axios"

const PortfolioActions = user => {
  const {token} = user
  const config = {headers: { Authorization: token }}
  const path = id => `professionals/${id}/work_portfolios`

  return {
    // GET
    getAll: async professionalId => { 
      const url = path(professionalId)
      return await Axios(url, config)
    },

    getById: async (professionalId, id)=> { 
      const url = path(professionalId)+id
      return await Axios(url, config)
    },

    // MUTATIONS
    create: async data => { 
      const url = path(professionalId)
      return await Axios.post(url, data, config)
    },

    update: async (id, data) => {
      const url = path(professionalId)+id
      return await Axios.patch(url, data, config)
    },

    delete: async id => {
      const url = path(professionalId)+id
      return await Axios.delete(url, config)
    }
  }
}

export default PortfolioActions
