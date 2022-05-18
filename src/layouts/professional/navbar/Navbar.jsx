import styles from "@/styles/Professionals.module.sass"

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
import SearchBar from "@/components/SearchBar"

const Navbar = ({links, isAdmin}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()
  const NavIcon = isOpen ? <CloseIcon/> : <HamburgerIcon/>

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_content}>
        <IconButton
          size="md"
          icon={NavIcon}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <div className={styles.logo}>
          <Image 
            mr={8}
            alt="logo"
            height="32px" 
            src="/workflow_logo.svg" 
          />
        </div>
        {!isAdmin && <SearchBar/>}
        <Flex alignItems="center">
          <HStack
            mr={8}
            as="nav" spacing={8}
            display={{ base: 'none', md: 'flex' }}
          >
            {links.map(({href, label}) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </HStack>
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <UserMenu/>
          </Stack>
        </Flex>
      </div>
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
    </nav>
  )
}

export default Navbar
