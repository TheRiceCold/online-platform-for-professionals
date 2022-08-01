import { hostURL } from "~/lib/constants/environments";
import { useMutation, useQuery } from "react-query";
import { useUsers } from "~/contexts/users/Context";
import { useForm } from "react-hook-form";

import Modal from "../overlay/Modal";
import Form from "../forms/Form";
import axios from "axios";

function FieldSettingsModal(props) {
  const {
    inputs,
    resolver,
    updateUserProfessional
  } = useUsers("professional");

  const formHook = useForm({ resolver });
  const { data: fields } = useQuery("fields", async() => {
    const url = `${hostURL}/api/professionals/fields`;
    const {data} = await axios(url);
    return data;
  });
  const mutation = useMutation(updateUserProfessional, { });
  const submitHandler = data => mutation.mutate({...data});

  return (
    <Modal
      {...props}
      alert={alert}
      header="Account Settings"
    >
      <Form
        inputs={inputs(fields)}
        mutation={mutation}
        formHook={formHook}
        submitValue="Update"
        submitHandler={submitHandler}
      />
    </Modal>
  );
};

export default FieldSettingsModal;
