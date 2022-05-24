import styles from "@/styles/Auth.module.sass"

import Links from "./Links"
import Modal from "./Modal"
import Navbar from "@/navbar"
import AuthForm from "./Form"
import Footer from "../footer/Footer"
import Alert from "@/components/feedback/Alert"
import {Link, Container} from "@chakra-ui/react"

import {useRouter} from "next/router"
import {useAuth} from "@/auth_context"
import useMount from "@/hooks/useMount"
import {useDisclosure as useModal} from "@chakra-ui/react"

function AuthLayout(props) {
  const {user} = useAuth()

  const router = useRouter()
  const {alerts, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Login", href: "/login" },
    { label: "Signup", href: "/signup" },
  ]

  useMount(() => { if (user.isAuth) router.push("/") })

  return (!user.isAuth && 
    <>
      <Navbar styles={styles} links={navLinks}/>
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
      <Footer/>
    </>
  )
}

export default AuthLayout
