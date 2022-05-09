import NextLink from "next/link"
import Form from "@/components/forms/Form"
import {Container, Stack} from "@chakra-ui/layout"
import {zodResolver} from "@hookform/resolvers/zod"
import FormModal from "@/components/modal/FormModal"
import {signUpSchema} from "@/validations/signUpSchema"
import {useDisclosure as useModal} from "@chakra-ui/react"
import AuthProvider, {useAuth} from "@/contexts/AuthContext"
import {Text, Heading, Link, Button} from "@chakra-ui/react"

const AuthLayout = props => {
  const {authMutation} = useAuth()
  const resolver = zodResolver(signUpSchema)
  const {linkTo, heading, isLoginPage} = props
  const {isLoading, mutateAsync, error} = authMutation
  const {onOpen : openModal, ...modalProps} = useModal()

  const submitHandler = async data => {
    console.log("submitted data: ", data)
    await mutateAsync({...data})
  }

  return (
    <AuthProvider isLoginPage={isLoginPage}>
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
            resolver={resolver}            
            isLoading={isLoading}
            mutationError={error}
            isLoginPage={isLoginPage} 
            submitHandler={submitHandler}
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
        {isLoginPage && 
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
      <FormModal 
        {...modalProps}
        heading="Resend Confirmation"
      />
    </AuthProvider>
  )
}

export default AuthLayout
