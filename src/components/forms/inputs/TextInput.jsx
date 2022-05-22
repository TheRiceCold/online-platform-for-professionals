import {Input} from "@chakra-ui/react"

const TextInput = ({input, register}) => (
  <Input 
    id={input.id} 
    {...register(input.id)}
    placeholder={input.label}
    autoComplete={input.autoComplete ?? "off"}
  />
)

export default TextInput
