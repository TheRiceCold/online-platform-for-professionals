import { hostURL } from "~/lib/constants/environments";
import { useMutation, useQueries } from "react-query";
import { useAuth } from "~/contexts/auth/Context";
import { useForm } from "react-hook-form";

import Modal from "../overlay/Modal";
import Form from "../forms/Form";
import axios from "axios";

function AccountSettingsModal(props) {
  const {updateInputs, updateAccount} = useAuth();

  const formHook = useForm();
  const mutation = useMutation(updateAccount, { });
  const submitHandler = data => mutation.mutate({ ...data });

  const [
    {data: cities}, 
    {data: regions}
  ] = useQueries([
    { 
      queryKey: "cities", 
      queryFn: async() => {
        const url = `${hostURL}/api/locations/cities`;
        const { data } = await axios(url);
        return data;
      }
    }, 
    { 
      queryKey: "regions", 
      queryFn: async() => {
        const url = `${hostURL}/api/locations/regions`;
        const { data } = await axios(url);
        return data;
      }
    }
  ])

  const inputs = updateInputs(regions, cities);

  return (
    <Modal
      {...props}
      alert={alert}
      header="Update Account"
    >
      <Form
        inputs={inputs}
        mutation={mutation}
        formHook={formHook}
        submitValue="Update"
        submitHandler={submitHandler}
      />
    </Modal>
  )
}

export default AccountSettingsModal

