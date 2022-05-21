import {Button as ChakraButton} from "@chakra-ui/react"

import {useColorModeValue} from "@chakra-ui/react"

function Button({children, ...props}) {
  const primaryProps = props.variant === "primary" ? {
    colorScheme: "teal",
    bg: useColorModeValue("teal.300", "teal.500"),
    _hover: { 
      bg: useColorModeValue("teal.400", "teal.600") 
    }
  } : props.variant === "delete" ? {
    colorScheme: "red",
    bg: useColorModeValue("red.400", "red.500"),
    _hover: { 
      bg: useColorModeValue("red.500", "red.600")
    }
  } : null

  return (
    <ChakraButton
      px={6}
      d="flex"
      {...props}
      rounded={'full'}
      {...primaryProps}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
