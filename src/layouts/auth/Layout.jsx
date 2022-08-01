import styles from "~/styles/Auth.module.sass"

import { useAuth } from "~/contexts/auth/Context";
import { useRouter } from "next/router";
import { Navbar } from "~/components";
import { useState } from "react";
import {
  Link, Container, 
  useDisclosure as useModal 
} from "@chakra-ui/react";

import Alert from "~/components/feedback/Alert";
import useMount from "~/lib/hooks/useMount";
import Footer from "../Footer";
import AuthForm from "./Form";
import Modal from "./Modal";
import Links from "./Links";

function AuthLayout(props) {
  const { user } = useAuth();
  const { alerts, isLoginPage } = props;
  const { onOpen : openModal, ...modalProps } = useModal();
  const [confirmedAccount, setConfirmedAccount] = useState("");

  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Login", href: "/login" },
    { label: "Signup", href: "/signup" }
  ];

  useMount(() => { 
    if (user.isAuth) router.push("/") 
    setConfirmedAccount(router.query["confirmed_account"]);
  });

  return (
    <>
      {!user.isAuth && 
        <>
          <Navbar styles={styles} links={navLinks}/>
          {alerts && 
            alerts.map((alert, i) => (
              <Alert key={i} {...alert} />
            ))
          }
          {confirmedAccount && isLoginPage &&
            <Alert 
              message="Your account has been confirmed! You can now login your account"  
              status="success" 
            />
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
      }
    </>
  );
}

export default AuthLayout;
