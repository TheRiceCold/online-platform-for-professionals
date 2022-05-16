import Links from "./Links"
import Modal from "./Modal"
import AuthForm from "./Form"
import {useRouter} from "next/router"
import useMount from "@/hooks/useMount"
import {useState, Fragment} from "react"
import Alert from "@/components/feedback/Alert"
import {Container, Button} from "@chakra-ui/react"
import {useAppState} from "@/context/state/context"
import {useDisclosure as useModal} from "@chakra-ui/react"

const AuthLayout = props => {
  const router = useRouter()
  const {useAuth} = useAppState()
  const {user: {isAuth}} = useAuth()
  const {alerts, isLoginPage} = props
  const [mounted, setMounted] = useState()
  const {onOpen : openModal, ...modalProps} = useModal()

  useMount(() => {
    setMounted(true)
    if (isAuth) router.push("/")
  })

  return (
    <Fragment>
      {mounted && !isAuth && 
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
      }
    </Fragment>
  )
}

export default AuthLayout
