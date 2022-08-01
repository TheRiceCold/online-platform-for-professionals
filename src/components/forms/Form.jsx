import Button from "../Button"
import MultiForm from "./MultiForm"
import FormControl from "./FormControl"

function Form(props) {
  const { 
    inputs,
    noLabel,
    children,
    formHook,
    mutation,
    submitValue,
    submitHandler,
  } = props;

  const isGrouped = inputs[0].hasOwnProperty("inputs")
  const { 
    register, 
    setValue,
    formState, 
    handleSubmit, 
  } = formHook;

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
          noLabel={noLabel}
          register={register}
          setValue={setValue}
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
