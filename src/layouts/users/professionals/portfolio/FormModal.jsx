import Modal from "~/components/overlay/Modal";
import Form from "~/components/forms/Form";

import { useWorkPortfolios } from "~/contexts/users/professionals/work_portfolios/Context";
import { useQueryClient, useMutation } from "react-query";
import { capitalize } from "~/lib/utils/stringHelpers";
import { useForm } from "react-hook-form";
import { useState } from "react";

function FormModal(props) {
  const [alerts, setAlerts] = useState();
  const { action, selectedId, setAlert } = props;
  const header = capitalize(`${action} Portfolio`);

  const {
    inputs, resolver,
    createWorkPortfolio, 
    updateWorkPortfolio,
  } = useWorkPortfolios();
  const queryClient = useQueryClient();
  const formHook = useForm({ resolver });

  const mutation = useMutation(
    (action === "update")
      ? updateWorkPortfolio 
      : createWorkPortfolio, {
      onSuccess: () => {
        props.onClose()
        queryClient.invalidateQueries("work_portfolios")
        const message = action === "update" ? 
          "Update Successful" : "New portfolio has been added"
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
    });

  const submitHandler = data => {
    const submittedData = (action === "update") 
      ? {selectedId, ...data} : {...data}
    mutation.mutate(submittedData)
  };

  return (
    <Modal {...props} alerts={alerts} header={header}>
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

export default FormModal;
