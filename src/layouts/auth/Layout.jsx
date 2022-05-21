import styles from "@/styles/Auth.module.sass"

import {
  Link,
  Container, 
} from "@chakra-ui/react"
import Links from "./Links"
import Modal from "./Modal"
import AuthForm from "./Form"
import Navbar from "../navbar/Navbar"
import Alert from "@/components/feedback/Alert"

import {useRouter} from "next/router"
import useMount from "@/hooks/useMount"
import {useAuth} from "@/context/auth/Context"
import {useDisclosure as useModal} from "@chakra-ui/react"

function AuthLayout(props) {
  const {user} = useAuth()

  const router = useRouter()
  const {alerts, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()

  useMount(() => { if (user.isAuth) router.push("/") })

  return (!user.isAuth && 
    <>
      <Navbar styles={styles}/>
      {alerts && 
        alerts.map((alert, i) => (
          <Alert key={i} {...alert}/>
        ))
      }
      <Container className={styles.layout}>
        <AuthForm {...props}/>
        <Links isLoginPage={isLoginPage}/>
        {isLoginPage && (
          <Link
            onClick={openModal}
            className={styles.link}
          > 
            I have not received an email
          </Link>
        )}
      </Container>
      <Modal {...modalProps} heading="Resend Confirmation"/>
    </>
  )
}

export default AuthLayout
