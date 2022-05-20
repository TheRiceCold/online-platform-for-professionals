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
import {useAppState} from "@/context/state/Context"

function Navbar(props) {
  const {
    links,
    styles,
    fullname,
    userMenuItems,
  } = props

  const {useAuth} = useAppState()
  const {user} = useAuth()
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
        <NextLink to="" className={styles.logo}>
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
        {user.isAuth && <SearchBar colorMode={colorMode}/>}
        <Flex alignItems="center">
          <Links links={links}/>
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
              {user.isAuth && 
                <UserMenu 
                  img={img}
                  user={user}
                  fullname={fullname}
                  items={userMenuItems}
                />
              }
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
