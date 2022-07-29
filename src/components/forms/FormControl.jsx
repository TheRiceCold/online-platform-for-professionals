import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel
} from "@chakra-ui/react";

import PasswordInput from "./inputs/PasswordInput";
import SelectInput from "./selects/SelectInput";
import RadioGroup from "./radios/RadioGroup";
import PhoneInput from "./inputs/PhoneInput";
import TextArea from "./inputs/TextArea";
import Input from "./inputs/TextInput";

function FormControl(props) {
  const { input, error, noLabel } = props;
  const { id, label, required } = input;

  const inputType = () => {
    switch (input.type) {
      case "tel":
        return <PhoneInput {...props} />

      case "password": 
        return <PasswordInput {...props} />

      case "select": 
        return <SelectInput {...props} />

      case "radio":
        return <RadioGroup {...props} />

      case "textarea":
        return <TextArea {...props} />

      default:
        return <Input {...props} />
    }
  };

  return (
    <ChakraFormControl
      key={id}
      isInvalid={error}
      isRequired={required}
    >
      {!noLabel &&
        <FormLabel mt={4} htmlFor={id}>
          {label}
        </FormLabel>
      }
      {inputType()}
      <FormErrorMessage>
        {error && error?.message}
      </FormErrorMessage>
    </ChakraFormControl>
  );
}

export default FormControl;
