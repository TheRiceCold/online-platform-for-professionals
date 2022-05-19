import {Link, HStack} from "@chakra-ui/react"

const Links = ({user}) => (
  <HStack
    mr={8}
    as="nav" spacing={8}
    display={{ base: 'none', md: 'flex' }}
  >
  {links(user).map(
    ({href, label}) => (
      <Link key={href} href={href}>
        {label}
      </Link>
  ))}
  </HStack>
)

export default Links

const links = user => {
  const prefix = to => `/professionals/${user.id}/${to}`

  return [
    { 
      label: "Portfolio",
      href: prefix("portfolio"), 
    },
    { 
      label: "Services",
      href: prefix("services"), 
    }, 
    { 
      label: "Connections",
      href: prefix("connections"), 
    }, 
    { 
      label: "Bookings",
      href: prefix("bookings"), 
    }
  ]
}
