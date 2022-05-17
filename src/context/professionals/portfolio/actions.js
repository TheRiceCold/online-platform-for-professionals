import Axios from "@/utils/axios"

function PortfolioActions(user) {
  const {token} = user
  const config = {headers: { Authorization: token }}
  const path = id => `professionals/${id}/work_portfolios`

  this.getAll = async professionalId => { 
    const url = path(professionalId)
    return await Axios.get(url, config)
  }

  this.getById = async (professionalId, id) => { 
    const url = path(professionalId)+id
    return await Axios.get(url, config)
  }

  this.create = async (professionalId, data) => { 
    const url = path(professionalId)
    return await Axios.post(url, data, config)
  }

  this.update = async (professionalId, id, data) => {
    const url = path(professionalId)+id
    return await Axios.patch(url, data, config)
  }

  this.delete = async (professionalId, id) => {
    const url = path(professionalId)+id
    return await Axios.delete(url, config)
  }
}

export default PortfolioActions
