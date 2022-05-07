import {
  FormLabel, 
  FormControl,
  FormErrorMessage 
} from "@chakra-ui/react"
import InputSwitch from "./InputSwitch"

const InputMap = ({errors, register, inputList}) => (
  <>
    {inputList.map(input => {
      const {id, label, required} = input
      const error = errors[id]

      return (
        <FormControl 
          key={id}
          isInvalid={error}
          isRequired={required}
        >
          <FormLabel mt={4} htmlFor={id}>
            {label}
          </FormLabel>
            <InputSwitch 
              input={input}
              register={register}
            />
          <FormErrorMessage>
            {error?.message}
          </FormErrorMessage>
        </FormControl> 
        )
      })
    }
  </>
)

export default InputMap
