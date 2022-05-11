import NextLink from "next/link"
import {Link as ChakraLink} from "@chakra-ui/react"

const Link = ({to, children, ...props}) => (
  <NextLink href={to}>
    <ChakraLink {...props}>
      {children}
    </ChakraLink> 
  </NextLink>
)

export default Link
