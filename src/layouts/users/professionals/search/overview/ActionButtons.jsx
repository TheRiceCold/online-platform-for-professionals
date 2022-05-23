import styles from "@/styles/users/Professionals.module.sass"

import {Stack} from "@chakra-ui/react"
import Button from "@/components/Button"
import CalendlyButton from "@/components/booking/CalendlyButton"

import {useAuth} from "@/auth_context"

function ActionButtons() {
  const {userRole} = useAuth()

  return (
    <Stack spacing={3} className={styles.actions}>
      {userRole === "client" && (
        <>
          {/*TODO Call post /connections */}
          <Button className={styles.subscribe} onClick={() => console.log("subscribe")}>
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
