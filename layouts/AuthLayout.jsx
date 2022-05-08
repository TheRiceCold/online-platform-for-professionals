import NextLink from "next/link"
import Modal from "@/components/Modal"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"
import {Container, Stack} from "@chakra-ui/layout"
import {useDisclosure as useModal} from "@chakra-ui/react"
import {Text, Heading, Link, Button} from "@chakra-ui/react"
import EmailConfirmLayout from "@/layouts/EmailConfirmLayout"

const AuthLayout = ({heading, linkTo, isLoginAuth, ...props}) => {
  const formHook = useForm()
  const {onOpen : openModal, ...modalProps} = useModal()

  return (
    <>
      <Container 
        display="flex" 
        flexDir="column"
        alignItems="center"
        justifyContent="center" 
      >
        <Stack 
          p="8" 
          width="500px" 
          boxShadow="xl" 
          borderRadius="xl"
        >
          <Heading>{heading}</Heading>
          <Form 
            {...props} 
            formHook={formHook}
            isLoginAuth={isLoginAuth}
          />
        </Stack>
        {linkTo && 
          <Text mt={8}>
            {`${linkTo.text} `}
            <NextLink href={linkTo.href}>
              <Link color="teal" href='#'>
                {linkTo.linkText}
              </Link>
            </NextLink>
          </Text>
        }
        {isLoginAuth && 
          <Button 
            mt={4}
            bg="none"
            color="teal" 
            borderRadius={60}
            onClick={openModal}
          > I have not received an email
          </Button>
        }
      </Container>
      <Modal 
        {...modalProps}
        heading="Resend Confirmation"
        content={<EmailConfirmLayout/>}
      />
      <pre>{JSON.stringify(formHook.watch(), null, 2)}</pre>
    </>
  )
}

export default AuthLayout
