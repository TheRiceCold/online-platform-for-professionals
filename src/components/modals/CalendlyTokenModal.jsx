import MaskedInput from "../MaskedInput";
import Modal from "../overlay/Modal";
import Form from "../forms/Form";
import Button from "../Button";

import { useCalendlyToken } from "~/contexts/users/professionals/calendly_token/Context";
import { useUsers } from "~/contexts/users/Context";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { 
  useQuery, 
  useMutation, 
  useQueryClient,
} from "react-query";

function CalendlyTokenModal(props) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const [toasts, setToasts] = useState();
  const [action, setAction] = useState("create");
  const {
    inputs, 
    getCalendlyToken,
    deleteCalendlyToken,
    createCalendlyToken, 
    updateCalendlyToken
  } = useCalendlyToken();
  const { getUserProfessional } = useUsers("professional");

  const formHook = useForm();
  const {data: calendlyTokenId} = useQuery(
    "calendly_token_id", 
    getUserProfessional, {
      select: data => data.data.relationships.calendlyToken.data.id,
      onSuccess: token_id => {
        if (!!token_id) 
          setAction("update")
      }
    }
  );

  const { data: calendlyToken } = useQuery(
    ["calendly_token", calendlyTokenId],
    getCalendlyToken, {
      enabled: !!calendlyTokenId,
      select: data => data.attributes.authorization
    }
  );

  const mutation = useMutation(
    action === "update" ? 
      data => {
        const submittedData = {calendlyTokenId, ...data}
        updateCalendlyToken(submittedData)
      }
      : createCalendlyToken, {
      onSuccess: () => {
        setToasts([{
          title: "Token has been saved",
          duration: 3000,
          variant: "solid",
          isClosable: true,
          status: "success",
        }]);
        props.onClose();
      },
      onError: error => {
        const {errors} = error?.response?.data;
        setToasts(
          errors.map(error => {
            return {
              title: error.title,
              duration: 3000,
              status: "error",
              variant: "solid",
              isClosable: true,
            }
          })
        );
    },
  })

  const submitHandler = data => mutation.mutate({...data});

  useEffect(() => {
    if (toasts) 
      toasts.forEach(message => toast(message))
      queryClient.invalidateQueries("calendly_token_id")
  }, [JSON.stringify(toasts)]);

  const handleDelete = async() => {
    try {
      await deleteCalendlyToken(calendlyTokenId)
      setToasts([{
        title: "Token has been deleted",
        duration: 3000,
        variant: "solid",
        isClosable: true,
      }])
      props.onClose()
    } catch(error) { console.log(error) }
  };

  return (
    <Modal
      {...props}
      isCentered
      alert={alert}
      header="Calendly Token"
    >
      <Form
        noLabel
        inputs={inputs}
        submitValue={action === "update" ? "Update" : "Authorize"}
        mutation={mutation}
        formHook={formHook}
        submitHandler={submitHandler}
      />
      {/* USER CALENDLY TOKEN EXIST */}
      {!!calendlyTokenId &&
        <> 
          <MaskedInput 
            readOnly 
            label="Current Token:"
            value={calendlyToken} 
          />
          <Button
            mt={4}
            w="full"
            variant="delete"
            onClick={handleDelete}
          >
            Delete existing token
          </Button>
        </>
      }
    </Modal>
  );
};

export default CalendlyTokenModal;
