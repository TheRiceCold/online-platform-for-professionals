import Axios from "axios";
import { apiURL } from "../constants/environments";

const headers = { Accept: "application/json" };
export default Axios.create({ baseURL: apiURL, headers });
