import {
  Flex,
  AlertIcon,
  CloseButton,
  useDisclosure,
  AlertDescription,
  Alert as ChakraAlert, 
} from '@chakra-ui/react'

function Alert({message, status}) {
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true})

  return isOpen && (
    <ChakraAlert 
      mb={1}
      status={status} 
      variant="left-accent"
    >
      <Flex 
        w="100%"
        alignItems="center" 
        justifyContent="space-between" 
      >
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
