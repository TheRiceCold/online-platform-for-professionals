import Axios from "@/axios"
import CryptoAES from "crypto-js/aes"
import CryptoENC from "crypto-js/enc-utf8"
import {useStorage} from "@/hooks/useStorage"
import {capitalize} from "@/utils/stringHelpers"

function Actions(user) {
  const {token} = user
  const path = "professionals/"
  const config = { headers: { Authorization: token } }

  this.getAll = async() => {
    const {data} = await Axios.get(path, config)
    return data
  }

  this.getById = async() => {
    const {data} = await Axios.get(path+user.professionalId, config)
    return data
  }

  this.create = async data => {
    const res = await Axios.post(path, { 
      professional: {
        user_id: user.id,
        ...data
      } 
    }, config)

    if (res.status === 201) {
      const storage = useStorage()
      const professionalId = res?.data?.included[0]?.relationships?.professional?.data.id

      const secret = process.env.NEXT_PUBLIC_SECRET
      const storedAuthData = CryptoAES.decrypt(
        storage.getItem({
          type: "session",
          key: "auth_data"
        }) ?? "", secret)


      let authData = storedAuthData && storedAuthData.toString(CryptoENC)
      authData = authData && JSON.parse(authData)
      authData.professionalId = professionalId

      storage.setItem({
        type: "session",
        key: "auth_data",
        value: CryptoAES.encrypt(JSON.stringify(authData), secret)
      })
    }
    
    return res
  }

  this.update = async(id, data) => 
    await Axios.patch(path+id, {
      professional: { ...data }
    }, config)

  this.delete = async id => 
    await Axios.delete(path+id, config)

  // User 
  this.updateUser = async data => 
    await this.update(user.professionalId, data)

  // User Attributes
  this.getAttributes = async() => {
    const {included} = await this.getById(user.professionalId)
    return included[0].attributes
  }

  this.getFullname = async() => {
    const {firstName, lastName} = await this.getAttributes()
    return capitalize(`${firstName} ${lastName}`)
  }

  this.getLocation = async() => {
    const {city, region} = await this.getAttributes()
    return `${city}, ${region}, Philippines`
  }

  // Professional Attributes
  this.getContactInfo = async() => {
    const {data} = await this.getById(user.professionalId)
    return data?.attributes
  }
}

export default Actions
