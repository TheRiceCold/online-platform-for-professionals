import Form from "~/components/forms/Form";
import Modal from "~/components/overlay/Modal";

import { useServices } from "~/contexts/users/professionals/services/Context";
import { useMutation, useQueryClient } from "react-query";
import { capitalize } from "~/lib/utils/stringHelpers";
import { useForm} from "react-hook-form";
import { useState } from "react";

function FormModal(props) {
  const [alerts, setAlerts] = useState();
  const { action, selectedId, setAlert } = props;
  const header = capitalize(`${action} Service`);

  const {
    inputs, 
    resolver,
    createService, 
    updateService,
  } = useServices();

  const queryClient = useQueryClient();
  const formHook = useForm({ mode: "onChange", resolver });

  const mutation = useMutation(
    (action === "update")
      ? updateService
      : createService, {
      onSuccess: () => {
        props.onClose()
        queryClient.invalidateQueries("services")
        const message = action === "update" ? 
          "Update Successful" : "New service has been added"
        setAlert({ message, status: "success" })
      },
      onError: error => {
        const {status, data} = error?.response
        const messages = data?.errors.map(error => error.title)

        setAlerts(messages.map(
          message => {
            return {status: "error", message}
          })
        )
      }
    })

  const submitHandler = data => {
    const submittedData = (action === "update") 
      ? {selectedId, ...data} : {...data}
    mutation.mutate(submittedData)
  };
 
  return (
    <Modal 
      {...props} 
      alerts={alerts}
      header={header}
    >
      <Form
        inputs={inputs}
        submitValue="Save"
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
    </Modal>
  );
}

export default FormModal
