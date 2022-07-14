import NextLink from "next/link"
import {Link as ChakraLink} from "@chakra-ui/react"

function Link({to, children, ...props}) {
  to = to || ""

  return (
    <NextLink href={to}>
      <ChakraLink {...props} color="teal">
        {children}
      </ChakraLink> 
    </NextLink>
  )
}

export default Link
