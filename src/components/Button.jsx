import {Button as ChakraButton} from "@chakra-ui/react"

function Button({children, ...props}) {
  const primaryProps = props.variant === "primary" && {
    colorScheme: "orange",
    bg: "orange.400",
    _hover: { bg: "orange.500" }
  }

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
