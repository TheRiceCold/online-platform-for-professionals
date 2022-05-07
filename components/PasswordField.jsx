import {BsEye} from "react-icons/bs"
import {Input, InputGroup, Button} from "@chakra-ui/react"

const PasswordField = ({id, label, isSignUp, register}) => (
  <InputGroup>
    <Input 
      id={id}
      type="password"
      {...register(id)}
      placeholder={label}
      // DOM warnings
      autoComplete={isSignUp ? "new-password" : "current-password" }
    />
    <Button><BsEye/></Button>
  </InputGroup>
)

export default PasswordField
