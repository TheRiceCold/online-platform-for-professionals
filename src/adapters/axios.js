import Axios from "axios";

const env = process.env.NODE_ENV;
const baseURL = (env === "development")
  ? "http://localhost:3001/api/v1/"
  : process.env.NEXT_PUBLIC_API;

const headers = { Accept: "application/json" };
export default Axios.create({ baseURL, headers });
