import {
  Image, Link,
  IconButton, Button,
  Box, Flex, Stack, HStack,
  useColorMode, useDisclosure
} from "@chakra-ui/react"
import {
  SunIcon, MoonIcon,
  HamburgerIcon, CloseIcon
} from "@chakra-ui/icons"
import UserMenu from "./UserMenu"
import SearchInput from "./SearchInput"

const UserNavbar = ({links, isAdmin}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <Box px={4} ml={8}>
      <Flex h={14} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        />
        <Flex alignItems="center">
          <Flex>
            <Image 
              mr={8}
              height="32px" alt="logo"
              src="/workflow_logo.svg" 
            />
            {!isAdmin && <SearchInput/>}
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <HStack
            mr={8}
            as="nav" spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map(link => <Link key={link}>{link}</Link>)}
          </HStack>
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
