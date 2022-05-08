import {
  Input, InputGroup, 
  InputLeftAddon,
} from "@chakra-ui/react"

const PhoneInput = props => {
  const {id, label, register} = props

  return (
    <InputGroup>
      <InputLeftAddon 
        bg="gray.50"
        children="+639" 
      />
      <Input 
        id={id}
        name={id}
        type="tel"
        {...register(id)}
        placeholder={label}
      />
    </InputGroup>
  )
}

export default PhoneInput
