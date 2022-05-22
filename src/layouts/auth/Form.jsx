import styles from "@/styles/Auth.module.sass"

import {
  Heading, 
  Flex, Stack, 
  Link, Checkbox, 
} from "@chakra-ui/react"
import Modal from "./Modal"
import Form from "@/components/forms/Form"

import {useAuth} from "@/auth_context"
import {useForm} from "react-hook-form"
import {useDisclosure as useModal} from "@chakra-ui/react"

function AuthForm(props) {
  const {mutation, inputs, isLoginPage} = props
  const {loginResolver, signupResolver} = useAuth()
  const {onOpen : openModal, ...modalProps} = useModal()

  const submitValue = isLoginPage ? "Login" : "Join"
  const mode = isLoginPage ? "onSubmit" : "onChange"
  const heading = isLoginPage ? "Login" : "Create an account"
  const resolver = isLoginPage ? loginResolver : signupResolver

  const formHook = useForm({mode, resolver})
  const submitHandler = data => mutation.mutate({...data})

  return (
    <Stack className={styles.formContainer}>
      {isLoginPage && (
        <Heading>{heading}</Heading>
      )}
      <Form
        inputs={inputs}
        mutation={mutation}
        formHook={formHook}
        submitValue={submitValue}
        submitHandler={submitHandler}
      >
        {isLoginPage &&
          <Flex 
            mt={4} mb={4}
            className={styles.formButtons}
          >
            <Checkbox colorScheme="teal">
              Remember me
            </Checkbox>
            <Link
              onClick={openModal}
              className={styles.link}
            >
              Forgot Password?
            </Link>
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
