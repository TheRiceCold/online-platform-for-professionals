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

function MaskedInput (props) {
  const [show, setShow] = useState(false)
  const Icon = (show ? <ViewOffIcon/> : <ViewIcon/>)

  return (
    <InputGroup>
      <Input {...props}/>
      <InputRightElement width="4em">
        <Button 
          h="2em" 
          bg="none" 
          size="sm"
          onClick={() => setShow(!show)}
        > 
          <Tooltip label={show ? "Hide token" : "Reveal token"}>
            {Icon}
          </Tooltip>
        </Button>
      </InputRightElement>
    </InputGroup>
  )
}

export default MaskedInput
