import {
  Flex, 
  Stack, 
  Button,
  Heading, 
  Checkbox, 
} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import Form from "@/components/forms/Form"

const AuthForm = props => {
  const {
    heading, 
    mutation,
    inputList, 
    submitValue,
    isLoginPage,
  } = props

  const submitHandler = data => mutation.mutate({...data})

  const formHook = useForm({
    mode: isLoginPage ? "onSubmit" : "onChange", 
    resolver: props.resolver
  })

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
