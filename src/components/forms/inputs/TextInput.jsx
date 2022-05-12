import {Input} from "@chakra-ui/react"

const TextInput = ({input, register}) => {
  const {id} = input
  return (
    <Input 
      id={id} 
      {...register(id)}
      placeholder={input.label}
      autoComplete={input.autoComplete ?? "off"}
    />
  )
}

export default TextInput
