import {
  Flex, Stack,
  Heading, Text,
  Avatar, AvatarBadge,
  MenuButton, MenuDivider,
  Menu, MenuList, MenuItem,
} from "@chakra-ui/react"
import {Fragment} from "react"
import {TriangleDownIcon} from "@chakra-ui/icons"
import {useAppState} from "@/context/state/context"

const UserMenu = () => {
  const {useAuth} = useAppState()
  const {logout, dispatch} = useAuth()

  const MENU_ITEMS = [
    {
      label: "Profile", 
      handleOnClick: () => { 
        console.log("going to profile page")
      }
    },
    {
      label: "Settings",
      handleOnClick: () => { 
        console.log("going to profile settings")
      }
    },
    "divider",
    {
      label: "Sign out",
      handleOnClick: () => {
        logout()
        location.reload()
        dispatch({type: "LOGOUT"})
      }
    }
  ]

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
            <Text>
            </Text>
          </Stack>
        </Flex>
        <MenuDivider />
        {MENU_ITEMS.map((item, i) => ( 
          <Fragment key={i}> 
            {item === "divider" ?
              <MenuDivider/> :
              <MenuItem onClick={item.handleOnClick}>
                {item.label}
              </MenuItem>
            }
          </Fragment>
        ))}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
