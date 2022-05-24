import {Button as ChakraButton} from "@chakra-ui/react"

import {useColorModeValue} from "@chakra-ui/react"

function Button({children, ...props}) {
  const primaryBg = useColorModeValue("teal.300", "teal.600")
  const primaryHoverBg = useColorModeValue("teal.400", "teal.700")
  const delBg = useColorModeValue("red.400", "red.500")
  const delHoverBg = useColorModeValue("red.500", "red.600")

  const isPrimary = props.variant === "primary"

  const primaryProps = isPrimary ? {
    colorScheme: "teal",
    bg: primaryBg,
    _hover: { bg: primaryHoverBg }
  } : 
    props.variant === "delete" ? {
      colorScheme: "red",
      bg: delBg,
      _hover: { bg: delHoverBg }
    } : null

  return (
    <ChakraButton
      px={6}
      d="flex"
      {...props}
      {...primaryProps}
    >
      {children}
    </ChakraButton>
  )
}

export default Button
