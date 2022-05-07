import {Text, Heading, Link} from "@chakra-ui/react"
import NextLink from "next/link"
import {useForm} from "react-hook-form"
import {Container, Stack} from "@chakra-ui/layout"
import Form from "@/components/Form"

const AuthLayout = ({heading, ...props}) => {

  const {register, handleSubmit, watch, formState} = useForm()

  return (
  <>
    <Container 
      display="flex" 
      justifyContent="center" 
      alignItems="center"
      flexDir="column"
      >
      <Stack width="500px" p="8" boxShadow="xl" borderRadius="xl">
        <Heading>{heading}</Heading>
        <Form
          {...props}
          register={register}
          formState={formState}
          handleSubmit={handleSubmit}
        />
      </Stack>
      <Text mt={8}>
        No Account? {' '}
        <NextLink href="signup">
          <Link color="teal" href='#'>
            Join Now
          </Link>
        </NextLink>
      </Text>
    </Container>
    <pre>{JSON.stringify(watch(), null, 2)}</pre>
  </>
  )
}

export default AuthLayout
