import {
  FormLabel, 
  FormErrorMessage,
  FormControl as ChakraFormControl
} from "@chakra-ui/react"
import Input from "./TextInput"
import PhoneInput from "./PhoneInput"
import SelectInput from "./SelectInput"
import PasswordInput from "./PasswordInput"

const FormControl = props => {
  const {input, register, error} = props
  const {id, label, required} = input

  const inputType = () => {
    switch (input.type) {
      case "tel":
        return <PhoneInput input={input} register={register}/>

      case "password": 
        return <PasswordInput input={input} register={register}/>

      case "select": 
        return <SelectInput input={input} register={register} />

      default:
        return <Input input={input} register={register}/>
    }
  }

  return (
    <ChakraFormControl
      key={id}
      isInvalid={error}
      isRequired={required}
    >
      <FormLabel mt={4} htmlFor={id}>
        {label}
      </FormLabel>
      {inputType()}
      <FormErrorMessage>
        {error && error?.message}
      </FormErrorMessage>
    </ChakraFormControl>
  )
}

export default FormControl
