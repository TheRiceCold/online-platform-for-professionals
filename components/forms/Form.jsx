import InputMap from "./InputMap"
import {useQuery} from "react-query"
import {useForm} from "react-hook-form"
// import {useFormContext} from "react-hook-form"
import {fetchLocations} from "@/api/locationsApi"
import {zodResolver} from "@hookform/resolvers/zod"
import {signUpSchema} from "@/validations/signUpSchema"
import {Flex, Checkbox, Button} from "@chakra-ui/react"

const Form = props => {
  const { 
    isLoading, isLoginPage,
    inputList, submitValue
  } = props

  const {
    register, handleSubmit, 
    formState: {errors, isValid}
  } = useForm({
    mode: "onChange",
    resolver: zodResolver(signUpSchema)
  })

  const submitHandler = async data => {
    console.log("submitted data: ", data)
    console.log("errors: ", errors)
    // await mutateAsync({...data}) 
  }

  const {data: locations} = useQuery("locations", 
    fetchLocations, { enabled: !isLoginPage })

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      {<InputMap 
        errors={errors}
        register={register}
        inputList={inputList}
        isLoginPage={isLoginPage}
      />}
      {isLoginPage &&
        <Flex mt={4} justify="space-between" align="center">
          <Checkbox colorScheme="teal">
            Remember me
          </Checkbox>
          <Button 
            bg="none"
            color="teal" 
            borderRadius={60}
          >
            Forgot Password?
          </Button>
        </Flex>
      }
      {/* TODO: */}
      {/* {!isLoginPage && */}
      {/*   <GroupSelectInput  */}
      {/*     label="Locations" */}
      {/*     options={locations} */}
      {/*   /> */}
      {/* } */}
      <Button 
        type="submit" 
        mt={4} w="100%"
        colorScheme="teal" 
        disabled={!isValid}
        isLoading={isLoading}
      > 
        {submitValue}
      </Button>
    </form>
  )
}

export default Form
