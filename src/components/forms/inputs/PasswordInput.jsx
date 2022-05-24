import {
  ViewIcon, 
  ViewOffIcon
} from "@chakra-ui/icons"
import {
  Button, Tooltip,
  Input, InputGroup, 
  InputRightElement,
} from "@chakra-ui/react"

import {useState} from "react"

function PasswordInput(props) {
  const [show, setShow] = useState(false)
  const type = (show ? "text" : "password")
  const {id, label, autoComplete} = props.input
  const Icon = (show ? <ViewOffIcon/> : <ViewIcon/>)

  return (
    <InputGroup>
      <Input 
        id={id}
        type={type}
        placeholder={label}
        {...props.register(id)}
        autoComplete={autoComplete}
      />
      <InputRightElement width="4em">
        <Button 
          h="2em" 
          bg="none" 
          size="sm"
          onClick={() => setShow(!show)}
        > 
          <Tooltip label="Toggle Password">
            {Icon}
          </Tooltip>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default PasswordInput
