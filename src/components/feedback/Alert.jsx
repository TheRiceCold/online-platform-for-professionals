import styles from "@/styles/Components.module.sass"

import {
  Flex,
  AlertIcon,
  CloseButton,
  useDisclosure,
  AlertDescription,
  Alert as ChakraAlert, 
} from '@chakra-ui/react'

function Alert({message, status, variant}) {
  const {isOpen, onClose} = useDisclosure({defaultIsOpen: true})

  return isOpen && (
    <Flex className={styles.alertContainer}>
      <ChakraAlert 
        mb={1}
        status={status} 
        variant={variant ? variant : "left-accent"}
        className={styles.alert}
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
      </ChakraAlert>
    </Flex>
  )
}

export default Alert
