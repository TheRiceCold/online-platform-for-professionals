import {
  SunIcon, MoonIcon,
  HamburgerIcon, CloseIcon
} from "@chakra-ui/icons"
import {
  Box, Flex, 
  Image, Link,
  Stack, HStack,
  IconButton, Button,
  useColorMode, useDisclosure,
} from "@chakra-ui/react"
import UserMenu from "./UserMenu"
import SearchInput from "./SearchInput"

const UserNavbar = ({links}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box px={4}>
      <Flex h={14} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
        <HStack ml={4} spacing={8} alignItems="center">
          <Box>
            <Image src="/workflow_logo.svg" height="32px" alt="logo"/>
          </Box>
          <SearchInput />
          <HStack
            as="nav" spacing={4}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map(link => <Link key={link}>{link}</Link>)}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <UserMenu/>
          </Stack>
        </Flex>
      </Flex>
      {
        isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {links.map(link => (
                <Link key={link}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null
      }
    </Box>
  )
}

export default UserNavbar
