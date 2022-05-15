import Axios from "axios"

const env = process.env.NODE_ENV

const baseURL = (env === "development") 
  ? "http://localhost:3001/" 
  : ""

export default Axios.create({baseURL})
