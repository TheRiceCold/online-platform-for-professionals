import Form from "./Form"
import Links from "./Links"
import Modal from "./Modal"
import {useEffect} from "react"
import {useRouter} from "next/router"
import Alert from "@/components/feedback/Alert"
import {Container, Button} from "@chakra-ui/react"
import {useAppState} from "@/context/state/context"
import {useDisclosure as useModal} from "@chakra-ui/react"

const AuthLayout = props => {
  const router = useRouter()
  const {useAuth} = useAppState()
  const {user: {isAuth}} = useAuth()
  const {alerts, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()

  useEffect(() => {
    if (isAuth) router.push("/")
  }, [])

  return (!isAuth &&
    <>
      {alerts && 
        alerts.map((alert, i) => (
          <Alert key={i} {...alert}/>
        ))
      }
      <Container 
        display="flex" 
        flexDir="column"
        alignItems="center"
        justifyContent="center" 
      >
        <Form {...props}/>
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
