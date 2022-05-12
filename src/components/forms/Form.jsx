import InputMap from "./InputMap"
import {useForm} from "react-hook-form"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    isLoginPage, resolver,
    mutation, submitValue, inputList
  } = props

  const {
    watch, register, handleSubmit, formState
  } = useForm({mode: "onChange", resolver})

  return (
    <form onSubmit={handleSubmit(mutation.submitHandler)}>
      {<InputMap 
        register={register}
        mutation={mutation}
        inputList={inputList}
        errors={formState.errors}
        submitValue={submitValue}
      />}
      {isLoginPage &&
        <Flex mt={4} justify="space-between" align="center">
          <Checkbox colorScheme="teal">
            Remember me
          </Checkbox>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >
            Forgot Password?
          </Button>
        </Flex>
      }
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}

export default Form
