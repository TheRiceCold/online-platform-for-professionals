import Button from "../Button"
import MultiForm from "./MultiForm"
import FormControl from "./FormControl"

function Form(props) {
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
          mt={8} 
          w="full"
          type="submit"
          variant="primary"
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
