import {Stack, ChakraAlert, AlertIcon} from '@chakra-ui/react'

const Alert = ({text}) => (
  <Stack spacing={3}>
    {/* <Alert status='success' variant='subtle'> */}
    {/*   <AlertIcon /> */}
    {/*   Email Confirmation Sent */}
    {/* </Alert> */}
    <ChakraAlert status='success' variant='solid'>
      <AlertIcon />
      {text}
    </ChakraAlert>
  </Stack> 
)

export default Alert
