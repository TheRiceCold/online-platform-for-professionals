import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
  InputRightElement,
  Input, InputGroup, 
  Button, Tooltip,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

function MaskedInput (props) {
  const [show, setShow] = useState(false);
  const type = show ? "text" : "password";
  const Icon = show ? <ViewOffIcon/> : <ViewIcon/>;

  return (
    <FormControl mt={16}>
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
  );
}

export default MaskedInput;
