import {
  Flex, Stack,
  Heading, Text,
  Avatar, AvatarBadge,
  MenuButton, MenuDivider,
  Menu, MenuList, MenuItem,
} from "@chakra-ui/react"
import {Fragment} from "react"
import {useRouter} from "next/router"
import {TriangleDownIcon} from "@chakra-ui/icons"
import {useAppState} from "@/context/state/Context"

const UserMenu = ({user, fullname}) => {
  const {useAuth} = useAppState()
  const {logout} = useAuth()
  const router = useRouter()

  return (
    <Menu>
      <MenuButton>
        <Flex align="center" mr={2}>
          <Avatar size="xs" mr={1}>
            <AvatarBadge boxSize='1.25em' bg='green.400' />
          </Avatar>
          <TriangleDownIcon 
            boxSize={2.5} 
            color="gray.600"
          />
        </Flex>
      </MenuButton>
      <MenuList>
        <Flex alignItems="center" ml={3}>
          <Avatar size="md" src="https://avatars.dicebear.com/api/male/username.svg" />
          <Stack ml={2} spacing={0}>
            <Heading size="3x1">
            </Heading>
            <Text>{fullname}</Text>
          </Stack>
        </Flex>
        <MenuDivider />
        {menuItems(user, router, logout)
          .map((item, i) => ( 
            <Fragment key={i}> 
              {item === "divider" ?
                <MenuDivider/> :
                <MenuItem onClick={item.handleOnClick}>
                  {item.label}
                </MenuItem>
              }
            </Fragment>
          )
        )}
      </MenuList>
    </Menu>
  )
}

export default UserMenu

const menuItems = (user, router, logout) => [
  {
    label: "Profile", 
    handleOnClick: () => { 
      router.push(`/professionals/${user.id}`)
    }
  },
  {
    label: "Settings",
    handleOnClick: () => { 

    }
  },
  "divider",
  {
    label: "Sign out",
    handleOnClick: logout
  }
]
