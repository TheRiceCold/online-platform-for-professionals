import MultiForm from "./MultiForm"
import FormControl from "./FormControl"
import {Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    inputs,
    children,
    formHook,
    mutation,
    submitValue,
    submitHandler
  } = props

  const {register, formState, handleSubmit} = formHook
  const isGrouped = inputs[0].hasOwnProperty("inputs")

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {isGrouped ? 
        <MultiForm
          inputs={inputs}
          register={register}
          errors={formState.errors}
          isLoading={mutation.isLoading}
        />
      : inputs.map(input => (
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
      {children}
    </form>
  )
}

export default Form
