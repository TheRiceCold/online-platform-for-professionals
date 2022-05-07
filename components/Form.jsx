import {
  Flex, Checkbox,
  FormErrorMessage,
  FormLabel, FormControl,
  Input, Button, Select,
} from "@chakra-ui/react"
import PasswordInput from "./PasswordInput"
import {capitalize} from "@/utils/stringHelpers"

const Form = props => {
  const { formHook, isLoginAuth, fields,
    submitHandler, buttonLabel } = props

  const { register, handleSubmit, formState } = formHook
  const { errors, isSubmitting } = formState

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {fields.map(field => {
        const {id, type, label, required} = field

        const isPassword = (type === "password")
        const isSelect = (type === "select")
        const isEmail = (type === "email")

        return (
          <FormControl 
            key={id}
            isRequired={required}
            isInvalid={errors[id]}
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
              : isSelect ?
                <Select {...register(id)}>
                  {field?.options?.map(item => (
                    <option key={item} value={item}>
                      {capitalize(item)}
                    </option>
                  ))} 
                </Select>
                : <Input 
                    id={id} 
                    {...register(id)}
                    placeholder={label}
                    // DOM warnings
                    autoComplete={isEmail ? "username" : "off"}
                  />
            }
            <FormErrorMessage>
              {errors[id]?.message}
            </FormErrorMessage>
          </FormControl>
        )
      })}
      {isLoginAuth &&
        <Flex mt={4} justify="space-between" align="center">
          <Checkbox colorScheme="teal">Remember me</Checkbox>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >Forgot Password?
          </Button>
        </Flex>
      }
      <Button 
        mt={4} w="100%"
        isLoading={isSubmitting}
        type="submit" colorScheme="teal" 
        > {buttonLabel}
      </Button>
    </form>
  )
}

export default Form
