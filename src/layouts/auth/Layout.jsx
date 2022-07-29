import styles from "@/styles/Auth.module.sass"

import { Link, Container } from "@chakra-ui/react";
import Alert from "@/components/feedback/Alert";
import Footer from "../footer/Footer";
import AuthForm from "./Form";
import Navbar from "@/navbar";
import Modal from "./Modal";
import Links from "./Links";

import { useDisclosure as useModal } from "@chakra-ui/react";
import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";
import useMount from "@/hooks/useMount";
import { useState } from "react";

function AuthLayout(props) {
  const { user } = useAuth();
  const { alerts, isLoginPage } = props;
  const { onOpen : openModal, ...modalProps } = useModal();
  const [confirmedAccount, setConfirmedAccount] = useState("");

  const router = useRouter();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Login", href: "/login" },
    { label: "Signup", href: "/signup" },
  ];

  useMount(() => { 
    if (user.isAuth) router.push("/") 
    setConfirmedAccount(router.query["confirmed_account"]);
  });

    console.log(confirmedAccount === "true");
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
