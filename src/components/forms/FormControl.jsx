import {
  FormLabel, 
  FormErrorMessage,
  FormControl as ChakraFormControl
} from "@chakra-ui/react"
import Input from "./inputs/TextInput"
import PhoneInput from "./inputs/PhoneInput"
import RadioGroup from "./radios/RadioGroup"
import SelectInput from "./selects/SelectInput"
import PasswordInput from "./inputs/PasswordInput"

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
        return <SelectInput input={input} register={register}/>

      case "radio":
        console.log(input.id)
        return <RadioGroup input={input} register={register}/>

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
