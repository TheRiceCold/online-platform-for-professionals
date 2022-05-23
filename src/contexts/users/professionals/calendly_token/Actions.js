import Axios from "@/axios"

function Actions(user) {
  const {token} = user
  const path = `professionals/${user.professionalId}/calendly_tokens/`
  const config = { headers: { Authorization: token } }

  this.get = async ({queryKey}) => {
    const [_, id] = queryKey
    const {data} = await Axios.get(path+id, config)
    return data.data
  }

  this.create = async data => 
    await Axios.post(path, { 
      calendly_token: { ...data } 
    }, config)

  this.update = async (id, data) => await Axios.patch(path+id, data, config)
  
  this.delete = async () => await Axios.delete(path+"1", config)
}

export default Actions
