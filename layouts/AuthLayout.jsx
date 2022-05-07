import NextLink from "next/link"
import Form from "@/components/Form"
import {useForm} from "react-hook-form"
import {Container, Stack} from "@chakra-ui/layout"
import {Text, Heading, Link} from "@chakra-ui/react"

const AuthLayout = ({heading, linkTo, ...props}) => {
  const formHook = useForm()

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
        <Form {...props} formHook={formHook}/>
      </Stack>
      {linkTo && 
        <Text mt={8}>
          {`${linkTo.text} `}
          <NextLink href={linkTo.href}>
            <Link color="teal" href='#'>
              {linkTo.linkText}
            </Link>
          </NextLink>
        </Text>
      }
    </Container>
    <pre>{JSON.stringify(formHook.watch(), null, 2)}</pre>
  </>
  )
}

export default AuthLayout
