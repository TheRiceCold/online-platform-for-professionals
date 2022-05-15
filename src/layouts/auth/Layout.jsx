import Form from "./Form"
import Links from "./Links"
import Modal from "./Modal"
import {useEffect} from "react"
import {useRouter} from "next/router"
import Alert from "@/components/feedback/Alert"
import {useAuth} from "@/context/auth/AuthContext"
import {Container, Button} from "@chakra-ui/react"
import {useDisclosure as useModal} from "@chakra-ui/react"

const AuthLayout = props => {
  const router = useRouter()
  const {loggedIn} = useAuth()
  const {alert, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()

  useEffect(() => {
    if (loggedIn) router.push("/")
  }, [])

  return (!loggedIn &&
    <>
      {alert && <Alert {...alert}/>}
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
