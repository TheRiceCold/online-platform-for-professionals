import {useStorage} from "@/hooks/useStorage"

const storage = useStorage()

const authData = JSON.parse(
  storage.getItem({
    type: "session",
    key: "auth_data"
  })
) || ""

export const initialState = {
  isAuth: false,
  id: authData.id,
  role: authData.role,
  token: authData.token,
}
