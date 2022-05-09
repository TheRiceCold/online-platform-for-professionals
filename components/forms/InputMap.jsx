import {
  FormLabel, 
  FormControl,
  FormErrorMessage 
} from "@chakra-ui/react"
import InputSwitch from "./InputSwitch"

const InputMap = props => {
  const {
    errors, register, 
    inputList, isLoginPage
  } = props

  return (
    <> {
      inputList.map(input => {
        const {id, label, required} = input
        const error = errors[id]

        return (
          <FormControl 
            key={id}
            isInvalid={error}
            isRequired={required}
          >
            <FormLabel mt={4} htmlFor={id}>
              {label}
            </FormLabel>
            <InputSwitch 
              input={input}
              register={register}
              isLoginPage={isLoginPage}
            />
            <FormErrorMessage>
              {error && error?.message}
            </FormErrorMessage>
          </FormControl> 
        )}
      )}
    </>
  )
}

export default InputMap
