import {
  Container,
  Stack
} from "@chakra-ui/layout"
import {
  Heading,
  FormLabel, FormControl,
  FormErrorMessage,
  Input, InputGroup,
  Button, Select,
} from "@chakra-ui/react"
import {useForm} from "react-hook-form"
import {capitalize} from "@/utils/stringHelpers"
import PasswordField from "@/components/PasswordField"

const AuthLayout = props => {
  const { 
    heading, fields, 
    buttonLabel, submitHandler } = props

  const {
    register, handleSubmit, 
    watch, formState: { errors, isSubmitting }
  } = useForm()

  return (
  <>
    <Container display="flex" justifyContent="center" alignItems="center">
      <Stack width="500px" p="4" boxShadow="xl" borderRadius="xl">
        <Heading>{heading}</Heading>
        <form onSubmit={handleSubmit(submitHandler)}>
          {fields.map(({id, type, label, options}) => {
            const isPassword = (type === "password")
            const isSelect = (type === "select")
            const isEmail = (type === "email")

            return (
              <FormControl 
                key={id}
                isRequired 
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
                      {options?.map(item => (
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
                        autoComplete={isEmail && "username"}
                      />
                }
                <FormErrorMessage>
                  {errors[id]?.message}
                </FormErrorMessage>
              </FormControl>
            )
          })}
          <Button mt={4} colorScheme="teal" type="submit">
            {buttonLabel}
          </Button>
        </form>
      </Stack>
    </Container>
    <pre>{JSON.stringify(watch(), null, 2)}</pre>
  </>
  )
}

export default AuthLayout
