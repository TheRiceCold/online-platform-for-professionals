import {
  Heading, 
  Flex, Stack, 
  Button, Checkbox, 
} from "@chakra-ui/react"
import Modal from "./Modal"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"
import {useAppState} from "@/context/state/Context"
import {useDisclosure as useModal} from "@chakra-ui/react"

function AuthForm(props) {
  const {useAuth} = useAppState()
  const {mutation, inputs, isLoginPage} = props
  const {loginResolver, signupResolver} = useAuth()
  const {onOpen : openModal, ...modalProps} = useModal()

  const submitValue = isLoginPage ? "Login" : "Join"
  const mode = isLoginPage ? "onSubmit" : "onChange"
  const heading = isLoginPage ? "Sign in" : "Create an account"
  const resolver = isLoginPage ? loginResolver : signupResolver

  const formHook = useForm({mode, resolver})
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Stack 
      p="8" 
      width="500px" 
      boxShadow="xl" 
      borderRadius="xl"
    >
      {isLoginPage && <Heading>{heading}</Heading>}
      <Form 
        inputs={inputs}
        mutation={mutation}
        formHook={formHook}
        submitValue={submitValue}
        submitHandler={submitHandler}
      >
        {isLoginPage &&
          <Flex mt={4} justify="space-between" align="center">
            <Checkbox colorScheme="teal">
              Remember me
            </Checkbox>
            <Button 
              bg="none"
              color="teal" 
              type="button"
              borderRadius={60}
              onClick={openModal}
            >
              Forgot Password?
            </Button>
          </Flex>
        }
        <pre> {/* DEVELOPMENT ONLY */}
          {process.env.NODE_ENV &&
            JSON.stringify(formHook.watch(), null, 2)
          }
        </pre>
      </Form>
      <Modal {...modalProps} heading="Reset Password"/>
    </Stack>
  )
}

export default AuthForm
