import {useState} from "react"
import {ViewIcon, ViewOffIcon} from "@chakra-ui/icons"
import {
  Button,
  Input, InputGroup, 
  InputRightElement,
} from "@chakra-ui/react"

const PasswordInput = props => {
  const [show, setShow] = useState(false)
  const type = (show ? "text" : "password")
  const {id, label, register, isLoginPage} = props
  const Icon = (show ? <ViewOffIcon/> : <ViewIcon/>)
  const autoComplete = isLoginPage ? "current-password" :  "new-password" 

  return (
    <InputGroup>
      <Input 
        id={id}
        name={id}
        type={type}
        {...register(id)}
        placeholder={label}
        autoComplete={autoComplete}
      />
      <InputRightElement width="4em">
        <Button 
          h="2em" bg="none" size="sm"
          onClick={() => setShow(!show)}
        > {Icon}
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
