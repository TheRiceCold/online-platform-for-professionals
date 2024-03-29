import { useStorage } from "~/lib/hooks/useStorage";
import Axios from "~/lib/adapters/axios";

function Actions(dispatch, token) {
  const storage = useStorage();
  const config = { headers: { Authorization: token } };

  this.signup = async data => await Axios.post("signup", this.signupData(data));

  this.login = async data => await Axios.post("login", { user: {...data} });

  this.update = async data => await Axios.patch("signup", this.signupData(data), config);

  this.logout = async () => {
    await Axios.delete("logout", config)
    dispatch({type: "LOGOUT"});
    storage.removeItem({ type: "session", key: "auth_data" });
    location.reload();
  }

  this.signupData = data => {
    let contactNo = data.contact_number;

    switch (contactNo.charAt(0)) {
      case "0": // allow 09 format
        contactNo = contactNo.substring(1);
        break;
      case "6": // allow 639 formant
        contactNo = contactNo.substring(2) ;
        break;
      case "+": // allow +639 format
        contactNo = contactNo.substring(3) ;
        break;
    }

    data.contact_number = contactNo;
    return { user: {...data} };
  }
}

export default Actions;
