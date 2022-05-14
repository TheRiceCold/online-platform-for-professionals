import InputMap from "./InputMap"
import {useForm} from "react-hook-form"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    mode, mutation,
    isLoginPage, resolver, 
    submitValue, inputList,
  } = props

  const {
    watch, 
    register, 
    formState, 
    handleSubmit, 
  } = useForm({mode, resolver})

  return (
    <form onSubmit={handleSubmit(mutation.submitHandler)}>
      {<InputMap 
        register={register}
        inputList={inputList}
        errors={formState.errors}
        submitValue={submitValue}
      />}
      <Button 
        mt={4} w="100%" 
        bg="teal" type="submit"
        isLoading={mutation.isLoading}
      >
        {props.submitValue}
      </Button>
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
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </form>
  )
}

export default Form
