import {
  Heading, 
  Flex, Stack, 
  Button, Checkbox, 
} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"
import {useAppState} from "@/context/state/Context"

const AuthForm = props => {
  const {useAuth} = useAppState()
  const {mutation, inputList, isLoginPage} = props
  const {loginResolver, signupResolver} = useAuth()

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
        mutation={mutation}
        formHook={formHook}
        inputList={inputList}
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
    </Stack>
  )
}

export default AuthForm
