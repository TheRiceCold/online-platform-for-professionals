import {useToast} from "@chakra-ui/toast"
import Form from "@/components/forms/Form"
import {useAuth} from "@/context/AuthContext"
import Link from "@/components/navigation/Link"
import {Container, Stack} from "@chakra-ui/layout"
import {zodResolver} from "@hookform/resolvers/zod"
import FormModal from "@/components/modals/FormModal"
import {Text, Heading, Button} from "@chakra-ui/react"
import {signUpSchema} from "@/validations/signUpSchema"
import {useDisclosure as useModal} from "@chakra-ui/react"

const AuthLayout = props => {
  const toast = useToast()
  const {mutation} = useAuth()

  const {linkTo, heading, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()

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
          <Heading>{heading}</Heading>
          <Form 
            {...props} 
            mutation={mutation}
            resolver={resolver}
            isLoginPage={isLoginPage} 
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
