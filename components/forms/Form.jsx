import InputMap from "./InputMap"
import {useForm} from "react-hook-form"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    inputList, resolver,
    isLoading, isLoginPage,
    submitHandler, submitValue
  } = props

  const {register, handleSubmit, formState} = useForm({
    mode: "onChange", resolver: resolver
  })

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {<InputMap 
        register={register}
        inputList={inputList}
        errors={formState.errors}
        isLoginPage={isLoginPage}
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
      {/* TODO: */}
      {/* {!isLoginPage && */}
      {/*   <GroupSelectInput  */}
      {/*     label="Locations" */}
      {/*     options={locations} */}
      {/*   /> */}
      {/* } */}
      <Button 
        type="submit" 
        mt={4} w="100%"
        colorScheme="teal" 
        isLoading={isLoading}
        disabled={!formState.isValid}
      > 
        {submitValue}
      </Button>
    </form>
  )
}

export default Form
