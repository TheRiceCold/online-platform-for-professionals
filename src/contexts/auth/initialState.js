import CryptoAES from "crypto-js/aes"
import CryptoENC from "crypto-js/enc-utf8"
import {useStorage} from "@/hooks/useStorage"

export {initialState}

const storage = useStorage()
const secret = process.env.NEXT_PUBLIC_SECRET

const storedAuthData = CryptoAES.decrypt(
  storage.getItem({
    type: "session",
    key: "auth_data"
  }) ?? "", secret)

let authData = storedAuthData && storedAuthData.toString(CryptoENC)
authData = authData && JSON.parse(authData)

let initialState = {
  id: authData.id || "",
  token: authData.token || "",
  isAuth: authData.isAuth || false,
  attributes: authData.attributes || {}
}

const role = authData?.attributes?.role.toLowerCase()
switch(role) {
  case "professional":
    initialState.professionalId = authData.professionalId
    break

  case "client":
    initialState.clientId = authData.clientId
    break

  case "admin":
    initialState.adminId = authData.adminId
    break
}
