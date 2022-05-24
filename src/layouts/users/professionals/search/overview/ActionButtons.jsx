import styles from "@/styles/users/Professionals.module.sass"

import Button from "@/components/Button"
import {Stack, Tooltip} from "@chakra-ui/react"
import CalendlyButton from "@/components/booking/CalendlyButton"

import {useAuth} from "@/auth_context"
import {useToast} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import {useMutation, useQuery} from "react-query"
import {useConnections} from "@/connections_context"

function ActionButtons({selectedId}) {
  const toast = useToast()
  const {
    user, 
    userRole, 
    userAttributes
  } = useAuth()
  const [toasts, setToasts] = useState()
  const {createConnection, getSubscriptions} = useConnections()

  const {data: subscriptions} = useQuery(
    "subscriptions",
    getSubscriptions, {
      enabled: userRole === "client"
    }
  )

  const disableSubscribe = !!subscriptions?.find(
    subscription => subscription.relationships 
      .professional.data.id === selectedId
  )

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
  })

  useEffect(() => {
    if (toasts) 
      toasts.forEach(message => toast(message))
  }, [JSON.stringify(toasts)])

  const handleSubscribe = () => {
    mutation.mutate({
      client_id: user.clientId,
      professional_id: selectedId
    }) 
  }

  console.log(disableSubscribe)

  return (
    <Stack spacing={3} className={styles.actions}>
      {userRole === "client" && (
        <>
          <Button 
            className={styles.subscribe} 
            onClick={handleSubscribe}
            disabled={disableSubscribe}
          >
            Subscribe
          </Button>
          {/* TODO Disable button if not subscribed (client.subscription.includes(professional)) */}
          <CalendlyButton
            firstName={userAttributes.firstName}
            lastName={userAttributes.lastName}
            email={userAttributes.email}
          />
        </>
      )}
    </Stack>
  )
}

export default ActionButtons
