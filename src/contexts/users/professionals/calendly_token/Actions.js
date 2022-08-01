import Axios from "~/lib/adapters/axios";

function Actions(user) {
  const path = `professionals/${user.professionalId}/calendly_tokens/`;
  const config = { headers: { Authorization: user.token } };

  this.get = async ({ queryKey }) => {
    const [_, id] = queryKey;
    const {data} = await Axios.get(path+id, config);
    return data.data;
  }

  this.create = async data => await Axios.post(
    path, 
    { calendly_token: { ...data } }, 
    config
  );

  this.update = async data => {
    const id = data.calendlyTokenId;
    delete data.calendlyTokenId;
    return await Axios.patch(path+id, data, config);
  }
  
  this.delete = async id => await Axios.delete(path+id, config);

  this.cancel = async (eventUuid, calendlyToken, reason) => {
    console.log(eventUuid, calendlyToken, reason)
    // const baseUrl = "https://api.calendly.com/"
    // return await axios.post(
    //   `${baseUrl}${uuid}/cancellation`, 
    //   {payload: reason }, 
    //   { authorization: calendlyToken}
    // )
  }
}

export default Actions
