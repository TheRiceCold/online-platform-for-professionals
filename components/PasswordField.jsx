import {useState} from "react"
import {BsEye} from "react-icons/bs"
import {Input, InputGroup, Button} from "@chakra-ui/react"

const PasswordField = ({id, label, isSignUp, register}) => {
  const [show, setShow] = useState(false)

  return (
    <InputGroup>
      <Input 
        id={id}
        {...register(id)}
        placeholder={label}
        type={show ? "text" : "password"}
        // DOM warnings
        autoComplete={isSignUp ? "new-password" : "current-password" }
      />
      <Button onClick={() => setShow(!show)}><BsEye/></Button>
    </InputGroup>
  )
}

export default PasswordField
