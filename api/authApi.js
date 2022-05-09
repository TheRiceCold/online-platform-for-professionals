import Axios from "axios"

const axios = Axios.create({
  baseURL: "https://localhost:3000"
})

export const login = async ({email, password}) => {
  try {
    const {data} = await axios.post("login", {
      user: { email, password } })
    return data
  } catch (err) {
    throw Error(err)
  }
}

export const signup = async(values) => {
  try {
    const {data} = await axios.post("signup", {...values})
    return data
  } catch (err) {
    const message = err.response.data.message
    throw Error(message)
  }
}
