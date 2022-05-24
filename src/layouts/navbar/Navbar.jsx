import {
  SunIcon, 
  MoonIcon,
  CloseIcon,
  HamburgerIcon, 
} from "@chakra-ui/icons"
import {
  Box, Flex,
  IconButton,
  Image, Stack,
  Link, Button,
} from "@chakra-ui/react"
import Links from "./Links"
import UserMenu from "./userMenu/UserMenu"
import SearchBar from "@/components/SearchBar"
import NextLink from "@/components/navigation/Link"
import ClienteleModal from "@/layouts/modals/ClienteleModal"
import SubscribersModal from "@/layouts/modals/SubscribersModal"
import SubscriptionsModal from "@/layouts/modals/SubscriptionsModal"
import MyProfessionalsModal from "@/layouts/modals/MyProfessionalsModal"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {useColorMode, useDisclosure} from "@chakra-ui/react"

function Navbar(props) {
  const {
    links, 
    styles, 
    withSearch, 
  } = props
  const {user, userRole} = useAuth()
  const {navModals} = useUsers(userRole)
  const {isOpen, onOpen, onClose} = useDisclosure()
  const {colorMode, toggleColorMode} = useColorMode()
  const NavIcon = isOpen ? <CloseIcon/> : <HamburgerIcon/>

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_content}>
        <IconButton
          mt={4}
          size="md"
          icon={NavIcon}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <NextLink to="/" className={styles.logo}>
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
        {withSearch && <SearchBar colorMode={colorMode}/>}
        <Flex alignItems="center">
          <Links links={links}/>
          <Stack direction="row" spacing={6}>
            <Button onClick={toggleColorMode} bg="none">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
              {user.isAuth && <UserMenu/>}
          </Stack>
        </Flex>
      </div>
      {userRole === "professional" ? (
        navModals?.clientele.isOpen ?
        <ClienteleModal {...navModals.clientele}/> :
        navModals?.subscribers.isOpen ?
          <SubscribersModal {...navModals.subscribers}/> : null
      ) : (
          navModals?.subscriptions.isOpen ?
            <SubscriptionsModal {...navModals.subscriptions}/> :
              navModals?.myProfessionals.isOpen ?
                <MyProfessionalsModal {...navModals.myProfessionals}/> : null 
      )}

      {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {links.map(({href, label}, idx)=> (
                <Link key={idx} href={href}>
                  {label}
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
