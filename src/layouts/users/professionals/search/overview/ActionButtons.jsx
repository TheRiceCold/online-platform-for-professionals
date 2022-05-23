import styles from "@/styles/users/Professionals.module.sass"

import {Stack} from "@chakra-ui/react"
import Button from "@/components/Button"
import CalendlyButton from "@/components/booking/CalendlyButton"

import {useAuth} from "@/auth_context"
import {useMutation} from "react-query"
import {useToast} from "@chakra-ui/react"
import {useState, useEffect} from "react"
import {useConnections} from "@/connections_context"

function ActionButtons({selectedId}) {
  const toast = useToast()
  const {
    user, 
    userRole, 
    userAttributes
  } = useAuth()
  const [toasts, setToasts] = useState()
  const {createConnection} = useConnections()

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

  return (
    <Stack spacing={3} className={styles.actions}>
      {userRole === "client" && (
        <>
          <Button className={styles.subscribe} onClick={handleSubscribe}>
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
