import {useToast} from "@chakra-ui/toast"
import Form from "@/components/forms/Form"
import Link from "@/components/navigation/Link"
import {useAuth} from "@/context/auth/AuthContext"
import {Container, Stack} from "@chakra-ui/layout"
import {zodResolver} from "@hookform/resolvers/zod"
import FormModal from "@/components/overlay/FormModal"
import {Text, Heading, Button} from "@chakra-ui/react"
import {useDisclosure as useModal} from "@chakra-ui/react"
import {signUpSchema} from "@/constants/validations/signUpSchema"

const AuthLayout = props => {
  const toast = useToast()
  const {mutation, isLoginPage} = useAuth()
  const {onOpen : openModal, ...modalProps} = useModal()
  const {linkTo, heading, inputList, submitValue} = props
  const resolver = isLoginPage ? null : zodResolver(signUpSchema)

  if (mutation.isError) {
    const {error} = mutation
    toast({title: error.message, status: "error"})
  }

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
          {isLoginPage && <Heading>{heading}</Heading>}
          <Form 
            mutation={mutation}
            resolver={resolver}
            isLoginPage={isLoginPage} 
            inputList={props.inputList}
            submitValue={props.submitValue}
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
          > I have not received an email
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
