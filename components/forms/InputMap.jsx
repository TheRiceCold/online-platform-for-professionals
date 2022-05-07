import {
  FormLabel, FormControl,
  FormErrorMessage, Input
} from "@chakra-ui/react"
import {Fragment} from "react"
import PhoneInput from "./PhoneInput"
import SelectInput from "./SelectInput"
import PasswordInput from "./PasswordInput"

const InputMap = ({errors, register, inputList}) => (
  <Fragment>
    {inputList.map(input => {
      const {id, type, label, required} = input
      const error = errors[id]

      const isPhone = (type === "tel")
      const isEmail = (type === "email")
      const isSelect = (type === "select")
      const isPassword = (type === "password")

      return (
        <FormControl 
          key={id}
          isInvalid={error}
          isRequired={required}
        >
          <FormLabel mt={4} htmlFor={id}>
            {label}
          </FormLabel>
          {isPassword ? 
            <PasswordInput
              id={id} 
              isLoginAuth
              label={label}
              register={register}
            />
            : isPhone ? 
              <PhoneInput
                id={id}
                label={label}
                register={register}
              />
              : isSelect ?
                <SelectInput
                  id={id}
                  input={input}
                  register={register}
                />
                : <Input 
                    id={id} 
                    {...register(id)}
                    placeholder={label}
                    autoComplete={isEmail ? "username" : "off"}
                  />
          }
          <FormErrorMessage>
            {error?.message}
          </FormErrorMessage>
        </FormControl> 
        )
      })
    }
  </Fragment>
)

export default InputMap
