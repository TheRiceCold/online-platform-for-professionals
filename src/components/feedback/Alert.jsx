import {
  Flex,
  AlertIcon,
  useDisclosure,
  AlertDescription,
  CloseButton,
  Alert as ChakraAlert, 
} from '@chakra-ui/react'

const Alert = ({message, status}) => {
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true})
  return isOpen && (
    <ChakraAlert 
      mb={1}
      status={status} 
      variant="left-accent"
    >
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Flex>
          <AlertIcon />
          <AlertDescription ml={4}>
            {message}
          </AlertDescription>
        </Flex>
        <CloseButton
          onClick={onClose}
          position='relative'
          alignSelf='flex-start'
        />
      </Flex>
    </ChakraAlert>
  )
}

export default Alert
