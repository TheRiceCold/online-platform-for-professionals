import {Link, HStack} from "@chakra-ui/react"

const Links = ({links}) => (
  <HStack
    mr={8}
    as="nav" spacing={8}
    display={{ base: 'none', md: 'flex' }}
  >
  {links?.map(
    ({href, label}) => (
      <Link key={href} href={href}>
        {label}
      </Link>
  ))}
  </HStack>
)

export default Links
