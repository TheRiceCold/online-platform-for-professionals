import Links from "./Links"
import Modal from "./Modal"
import AuthForm from "./Form"
import {useRouter} from "next/router"
import useMount from "@/hooks/useMount"
import Alert from "@/components/feedback/Alert"
import {Container, Button} from "@chakra-ui/react"
import {useAppState} from "@/context/state/context"
import {useDisclosure as useModal} from "@chakra-ui/react"

const AuthLayout = props => {
  const {useAuth} = useAppState()
  const {user} = useAuth()

  const {alerts, isLoginPage} = props
  const router = useRouter()
  const {
    onOpen : openModal, 
    ...modalProps
  } = useModal()

  useMount(() => {
    if (user.isAuth) 
      router.push("/")
  })

  return (!user.isAuth && 
    <>
      {alerts && 
        alerts.map((alert, i) => (
          <Alert key={i} {...alert}/>
      ))}
      <Container 
        display="flex" 
        flexDir="column"
        alignItems="center"
        justifyContent="center" 
      >
        <AuthForm {...props}/>
        <Links isLoginPage={isLoginPage}/>
        {isLoginPage && 
          <Button 
            mt={4}
            bg="none"
            color="teal" 
            borderRadius={60}
            onClick={openModal}
          > 
            I have not received an email
          </Button>
        }
      </Container>
      <Modal 
        {...modalProps}
        heading="Resend Confirmation"
      />
    </>
  )
}

export default AuthLayout
