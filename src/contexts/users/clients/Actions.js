import Axios from "~/lib/adapters/axios";

function Actions(user) {
  const path = "clients/";
  const config = { headers: { Authorization: user.token } };

  this.getAll = async () => {
    const {data} = await Axios.get(path, config);
    return data.data;
  }

  this.getById = async ({ queryKey }) => {
    const [_, id] = queryKey;
    return await Axios.get(path+id, config);
  }

  this.delete = async id => 
    await Axios.delete(path+id, config);
}

export default Actions;
