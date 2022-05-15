import MultiForm from "./MultiForm"
import FormControl from "./FormControl"
import {useForm} from "react-hook-form"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    mode, 
    resolver, 
    mutation,
    inputList,
    submitValue,
    isLoginPage, 
    submitHandler
  } = props

  const isGrouped = inputList[0].hasOwnProperty("inputs")

  const {
    watch, 
    register, 
    formState, 
    handleSubmit, 
  } = useForm({mode, resolver})

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {isGrouped ? 
        <MultiForm
          register={register}
          inputList={inputList}
          errors={formState.errors}
          isLoading={mutation.isLoading}
        />
      : inputList.map(input => (
        <FormControl 
          input={input}
          key={input.id}
          register={register}
          error={formState.errors[input.id]}
        /> 
      ))}
      {!isGrouped &&
        <Button 
          mt={4} 
          w="100%" 
          bg="teal" 
          type="submit"
          isLoading={mutation.isLoading}
        >
          {submitValue}
        </Button>
      }
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
          JSON.stringify(watch(), null, 2)
        }
      </pre>
    </form>
  )
}

export default Form
