import Head from "next/head"
import {useState} from "react"
import {useForm} from "react-hook-form"
import Input from "@/components/forms/TextInput"
import AdminLayout from "@/layouts/users/AdminLayout"
import {Box, Heading, Button} from "@chakra-ui/react"

const Register = () => {
  const {watch, register} = useForm()
  const [formStep, setFormStep] = useState(0)

  const handleSubmit = () => {
  }

  const renderButton = () => {
    if (formStep === 1) 
      return (
        <Button onClick={handleSubmit}>
          Create Account
        </Button>
      )
    else 
      return (
        <Button onClick={() => {
          setFormStep(cur => cur + 1)
        }}>Next</Button>
      )
  }

  return (
    <main>
      <Head>
        <title>Register</title>
      </Head>
      <form>
      {formStep === 0 &&
        <Box>
          <Heading>Personal Information</Heading>
          <Input 
            id="username"
            label="Username"
            register={register}
          />
        </Box>
      }
      {formStep === 1 &&
        <Box>
          <Heading>Billing Information</Heading>
          <Input 
            id="address"
            label="Address"
            register={register}
          />
        </Box>
      }
      {renderButton()}
      </form>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </main>
  )
}

export default Register
