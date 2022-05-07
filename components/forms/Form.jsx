import InputMap from "./InputMap"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    formHook, isLoginAuth, inputList, 
    submitHandler, buttonLabel 
  } = props

  const {
    register, handleSubmit, 
    formState: {errors, isSubmitting}
  } = formHook

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {<InputMap 
        errors={errors}
        register={register}
        inputList={inputList}
      />}
      {isLoginAuth &&
        <Flex mt={4} justify="space-between" align="center">
          <Checkbox colorScheme="teal">
            Remember me
          </Checkbox>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >Forgot Password?
          </Button>
        </Flex>
      }
      <Button 
        type="submit" 
        mt={4} w="100%"
        colorScheme="teal" 
        isLoading={isSubmitting}
      > 
        {buttonLabel}
      </Button>
    </form>
  )
}

export default Form
