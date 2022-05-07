import {Input} from "@chakra-ui/react"

const TextInput = ({id, register, label, isEmail}) => (
  <Input 
    id={id}
    {...register(id)}
    placeholder={label}
    autoComplete={isEmail ? "username" : "off"}
  />
)

export default TextInput
