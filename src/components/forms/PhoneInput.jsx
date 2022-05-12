import {
  Input, InputGroup, 
  InputLeftAddon,
} from "@chakra-ui/react"

const PhoneInput = props => {
  const {id, label, register} = props

  return (
    <InputGroup>
      <InputLeftAddon children="+639"/>
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
