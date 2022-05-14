import {
  Flex,
  AlertIcon,
  useDisclosure,
  AlertDescription,
  CloseButton,
  Alert as ChakraAlert, 
} from '@chakra-ui/react'

const Alert = ({text, status}) => {
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true})

  return isOpen && (
    <ChakraAlert status={status} variant="solid">
      <Flex alignItems="center" justifyContent="space-between" w="100%">
        <Flex>
          <AlertIcon />
          <AlertDescription ml={4}>
            {text}
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
