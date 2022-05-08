import {Input} from "@chakra-ui/react"

const TextInput = props => {
  const {id, label, register, isEmail} = props
  const autoComplete = isEmail ? "username" : "off"

  return (
    <Input 
      id={id} 
      name={id}
      {...register(id)}
      placeholder={label}
      autoComplete={autoComplete}
    />
  )
}

export default TextInput
