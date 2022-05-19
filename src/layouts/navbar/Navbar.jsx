import styles from "@/styles/Professionals.module.sass"

import {
  SunIcon, MoonIcon,
  HamburgerIcon, CloseIcon
} from "@chakra-ui/icons"
import {
  Box, Flex,
  IconButton,
  Image, Stack,
  Link, Button,
  useColorMode, useDisclosure,
} from "@chakra-ui/react"
import Links from "./Links"
import UserMenu from "./UserMenu"
import SearchBar from "@/components/SearchBar"
import NextLink from "@/components/navigation/Link"

function Navbar({user, fullname, links}) {
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()
  const NavIcon = isOpen ? <CloseIcon/> : <HamburgerIcon/>
  const img = "https://avatars.dicebear.com/api/male/username.svg"

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
        <NextLink 
          className={styles.logo}
          to={`/professionals/${user.id}`}
        >
          <Image 
            mr={8}
            alt="logo"
            height="32px" 
            src={colorMode === "light" ? 
              "/workflow_logo.svg" : 
              "/workflow_logo_white.svg"
            }
          />
        </NextLink>
        <SearchBar colorMode={colorMode}/>
        <Flex alignItems="center">
          <Links links={links}/>
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <UserMenu 
              img={img}
              user={user}
              fullname={fullname}
            />
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
