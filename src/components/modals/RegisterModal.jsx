import { Flex, Heading } from "@chakra-ui/react";

import { hostURL } from "~/lib/constants/environments";
import { useQuery, useMutation } from "react-query";
import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

import Modal from "../overlay/Modal";
import Form from "../forms/Form";
import Button from "../Button";
import axios from "axios";

function RegisterModal() {
  const router = useRouter();
  const [alerts, setAlerts] = useState();
  const { user, dispatch, logout } = useAuth();

  const {
    inputs, 
    resolver, 
    createProfessional
  } = useUsers("professional");

  const formHook = useForm({ mode: "onChange", resolver });

  const { data: fields } = useQuery("fields", async() => {
    const url = `${hostURL}/api/professionals/fields`;
    const {data} = await axios(url);
    return data;
  });

  const mutation = useMutation(createProfessional, {
    onSuccess: ({ data }) => {
      dispatch({ type: "REGISTER_PROFESSIONAL", payload: data })
      router.push("/");
    },
    onError: error => {
      const {status, data} = error?.response;
      const messages = data?.errors.map(error => error.title);

      setAlerts(messages.map(message => {
          return { status: "error", message }
        })
      );
    }
  })

  const header = (
    <Flex justifyContent="space-between">
      <Heading size="lg">
        Register Professional
      </Heading>
      <Button variant="delete" onClick={logout}>
        Sign Out
      </Button>
    </Flex>
  )

  return ( 
    <Modal 
      noCloseButton
      alerts={alerts}
      header={header}
      isOpen={!user.professionalId}
    >
      <Form
        inputs={inputs(fields)}
        formHook={formHook}
        mutation={mutation}
        submitValue="Register"
        submitHandler={data => mutation.mutate({...data})}
      />
    </Modal>
  );
}

export default RegisterModal;
