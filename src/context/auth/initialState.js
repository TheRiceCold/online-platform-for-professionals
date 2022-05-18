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

let authData = storedAuthData.toString(CryptoENC)
authData = authData && JSON.parse(authData)

const initialState = {
  id: authData.id || "",
  role: authData.role || "",
  token: authData.token || "",
  isAuth: authData.isAuth || false,
}
