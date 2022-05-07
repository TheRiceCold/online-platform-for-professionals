import {
  InputLeftElement, InputGroup, 
  Input, Button } from "@chakra-ui/react"
import {EmailIcon} from "@chakra-ui/icons"

const EmailConfirmLayout = () => {
  return (
    <form>
      <InputGroup mt={4}>
        <InputLeftElement
          pointerEvents='none'
          children={<EmailIcon color="gray.500"/>}
        />
        <Input placeholder="Email" />
      </InputGroup>
      <Button 
        type="submit"
        mt={8} w="100%"
        colorScheme="teal"
      >Send
      </Button>
    </form>
  )
}

export default EmailConfirmLayout
