import {
  ViewIcon, 
  ViewOffIcon
} from "@chakra-ui/icons"
import {
  FormLabel,
  FormControl,
  Button, Tooltip,
  Input, InputGroup, 
  InputRightElement,
} from "@chakra-ui/react"

import {useState} from "react"

function MaskedInput (props) {
  const [show, setShow] = useState(false)
  const type = (show ? "text" : "password")
  const Icon = (show ? <ViewOffIcon/> : <ViewIcon/>)

  return (
    <FormControl mt={4}>
      <FormLabel>{props.label}</FormLabel>
      <InputGroup>
        <Input {...props} type={type}/>
        <InputRightElement width="4em">
          <Button 
            h="2em" 
            bg="none" 
            size="sm"
            onClick={() => setShow(!show)}
          > 
            <Tooltip label={show ? "Reveal token" : "Hide token"}>
              {Icon}
            </Tooltip>
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  )
}

export default MaskedInput
