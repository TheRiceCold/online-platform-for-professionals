import {
  Flex,
  FormErrorMessage,
  FormLabel, FormControl,
  Input, Button, Select,
} from "@chakra-ui/react"
import PasswordField from "./PasswordField"
import {capitalize} from "@/utils/stringHelpers"

const Form = props => {
  const { 
    formHook, formModalButton,
    submitHandler, fields, buttonLabel } = props
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
              <PasswordField 
                id={id} 
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
      {formModalButton &&
        <Flex mt={4}>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >{formModalButton}
          </Button>
        </Flex>
      }
      <Button 
        mt={4} 
        width="100%"
        type="submit"
        borderRadius={60}
        colorScheme="teal" 
        isLoading={isSubmitting}
        > {buttonLabel}
      </Button>
    </form>
  )
}

export default Form
