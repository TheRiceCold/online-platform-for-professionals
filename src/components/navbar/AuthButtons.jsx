import {Flex,Button} from "@chakra-ui/react"

const AuthButtons = () => {
  return (
    <Flex justify="center" align="center">
      <Button 
        mr={2} 
        onClick={() => {}}
      >
        Join now
      </Button>
      <Button 
        mr={2}
        border="2px"
        variant="outline"
        borderRadius="60"
        onClick={() => {}}
      >Sign in
      </Button>
    </Flex>
  )
}

export default AuthButtons
