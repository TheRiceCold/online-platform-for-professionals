import {
  Input, InputGroup, 
  InputLeftAddon,
} from "@chakra-ui/react"

const PhoneInput = ({id, label, register}) => {
  return (
    <InputGroup>
      <InputLeftAddon 
        bg="gray.50"
        children="+639" 
      />
      <Input 
        id={id}
        type="tel"
        {...register(id)}
        placeholder={label}
      />
    </InputGroup>
  )
}

export default PhoneInput