import {useState} from "react"
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons"
import {
  Button,
  Input, InputGroup, 
  InputRightElement,
} from "@chakra-ui/react"

const PasswordInput = props => {
  const {id, label, isLoginAuth, register} = props
  const [show, setShow] = useState(false)

  return (
    <InputGroup>
      <Input 
        id={id}
        {...register(id)}
        placeholder={label}
        type={show ? "text" : "password"}
        // DOM warnings
        autoComplete={isLoginAuth ? "current-password" :  "new-password" }
      />
      <InputRightElement width="4em">
        <Button 
          h="2em"
          size="sm"
          bg="none"
          onClick={() => setShow(!show)}>
          {show ? <ViewOffIcon/> : <ViewIcon/>}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
