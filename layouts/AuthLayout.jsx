import NextLink from "next/link"
import Form from "@/components/forms/Form"
import {Container, Stack} from "@chakra-ui/layout"
import FormModal from "@/components/modal/FormModal"
import {useForm, FormProvider} from "react-hook-form"
import {useDisclosure as useModal} from "@chakra-ui/react"
import {Text, Heading, Link, Button} from "@chakra-ui/react"

const AuthLayout = props => {
  const {linkTo, heading, isLoginPage} = props
  const {onOpen : openModal, ...modalProps} = useModal()
  // TODO: remove after auth complete
  // const formMethods = useForm({resolvers: zodResolver(signUpSchema)})

  return (
    <>
      <Container 
        display="flex" 
        flexDir="column"
        alignItems="center"
        justifyContent="center" 
      >
        <Stack 
          p="8" 
          width="500px" 
          boxShadow="xl" 
          borderRadius="xl"
        >
          <Heading>{heading}</Heading>
          {/* <FormProvider {...formMethods}> */}
            <Form 
              {...props} 
              isLoginPage={isLoginPage} 
            />
          {/* </FormProvider> */}
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
        {isLoginPage && 
          <Button 
            mt={4}
            bg="none"
            color="teal" 
            borderRadius={60}
            onClick={openModal}
          > I have not received an email
          </Button>
        }
      </Container>
      <FormModal 
        {...modalProps}
        heading="Resend Confirmation"
      />
    </>
  )
}

export default AuthLayout
