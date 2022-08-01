import styles from "~/styles/users/Professionals.module.sass"

import { Stack } from "@chakra-ui/react";
import { Button } from "~/components";

import { useConnections } from "~/contexts/connections/Context";
import { useMutation, useQuery } from "react-query";
import { useAuth } from "~/contexts/auth/Context";
import { useToast } from "@chakra-ui/react"
import { useState, useEffect } from "react";

import CalendlyButton from "~/components/booking/CalendlyButton";

function ActionButtons({ selectedId }) {
  const {
    user, 
    userRole, 
    userAttributes
  } = useAuth();
  const { 
    createConnection, 
    getSubscriptions 
  } = useConnections();
  const toast = useToast();
  const [toasts, setToasts] = useState();

  const {data: subscriptions} = useQuery(
    "subscriptions",
    getSubscriptions, {
      enabled: userRole === "client"
    }
  );

  const disableSubscribe = !!subscriptions?.find(
    subscription => subscription.relationships 
      .professional.data.id === selectedId
  );

  const mutation = useMutation(
    createConnection, {
      onSuccess: () => {
        setToasts([{
          title: "Subscribe successfully",
          duration: 3000,
          status: "success",
          variant: "solid",
          isClosable: true,
        }])
      },
      onError: error => {
        const messages = error.response.data.errors?.map(error => error.title)
        setToasts(
          messages.map(title => {
            return {
              title,
              duration: 3000,
              status: "error",
              variant: "solid",
              isClosable: true,
            }
          })
        )
      },
  });

  useEffect(() => {
    if (toasts) 
      toasts.forEach(message => toast(message))
  }, [JSON.stringify(toasts)]);

  const handleSubscribe = () => {
    mutation.mutate({
      client_id: user.clientId,
      professional_id: selectedId
    }) 
  };

  return (
    <Stack spacing={3} className={styles.actions}>
      {userRole === "client" && (
        <>
          <Button 
            onClick={handleSubscribe}
            disabled={disableSubscribe}
            className={styles.subscribe} 
          >
            Subscribe
          </Button>
          <CalendlyButton
            selectedId={selectedId}
            email={userAttributes.email}
            lastName={userAttributes.lastName}
            firstName={userAttributes.firstName}
          />
        </>
      )}
    </Stack>
  );
}

export default ActionButtons
