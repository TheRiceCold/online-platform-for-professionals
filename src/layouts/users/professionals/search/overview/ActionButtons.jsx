import styles from "@/styles/users/Professionals.module.sass"

import {Stack} from "@chakra-ui/react"
import Button from "@/components/Button"
import CalendlyButton from "@/components/booking/CalendlyButton"

import {useAuth} from "@/auth_context"
import {useMutation} from "react-query"
import {useConnections} from "@/connections_context"

function ActionButtons({selectedId}) {
  const {userRole, user} = useAuth()
  const {createConnection} = useConnections()

  const mutation = useMutation(createConnection, {
    onSetted: res => {
      console.log(res)
    }
  })

  const handleSubscribe = () => {
    console.log("subscribe")
    mutation.mutate({
      client_id: user.clientId,
      professional_id: selectedId
    }) 
  }

  return (
    <Stack spacing={3} className={styles.actions}>
      {userRole === "client" && (
        <>
          {/*TODO Call post /connections */}
          <Button className={styles.subscribe} onClick={handleSubscribe}>
            Subscribe
          </Button>
          {/* TODO Disable button if not subscribed (client.subscription.includes(professional)) */}
          {/* TODO Replace with client details or remove props if useContext will be used */}
          <CalendlyButton
            firstName={'Luffy'}
            lastName={'Monkey'}
            email={'client2@email.com'}
          />
        </>
      )}
    </Stack>
  )
}

export default ActionButtons
