import {InputLeftAddon, Input, InputGroup} from "@chakra-ui/react"

const PhoneInput = ({register, input}) => (
  <InputGroup>
    <InputLeftAddon children="+639"/>
    <Input 
      type="tel"
      id={input.id}
      {...register(input.id)}
      placeholder={input.label}
    />
  </InputGroup>
)

export default PhoneInput
