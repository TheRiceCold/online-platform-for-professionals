import {
  Container, Stack,
  Text, Heading, Button
} from "@chakra-ui/react"
import Form from "@/components/forms/Form"
import Link from "@/components/navigation/Link"
import Alert from "@/components/feedback/Alert"
import {useAuth} from "@/context/auth/AuthContext"
import {zodResolver} from "@hookform/resolvers/zod"
import FormModal from "@/components/overlay/FormModal"
import {useDisclosure as useModal} from "@chakra-ui/react"
import {loginSchema} from "@/constants/validations/loginSchema"
import {signUpSchema} from "@/constants/validations/signUpSchema"

const AuthLayout = props => {
  const {mutation, isLoginPage, alert} = useAuth()
  const {onOpen : openModal, ...modalProps} = useModal()
  const {linkTo, heading, inputList, submitValue} = props
  const schema = isLoginPage ? loginSchema : signUpSchema

  return (
    <> 
      {alert && 
        <Alert 
          text={alert.message} 
          status={alert.status}
        /> 
      }
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
          {isLoginPage && <Heading>{heading}</Heading>}
          <Form 
            mutation={mutation}
            inputList={inputList}
            submitValue={submitValue}
            isLoginPage={isLoginPage} 
            resolver={zodResolver(schema)}
            mode={isLoginPage ? "onSubmit" : "onChange"}
          />
        </Stack>
        {linkTo && 
          <Text mt={8}>
            {`${linkTo.text} `}
            <Link to={linkTo.href} color="teal">
              {linkTo.linkText}
            </Link>
          </Text>
        }
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
      <FormModal 
        {...modalProps}
        heading="Resend Confirmation"
      />
    </>
  )
}

export default AuthLayout
