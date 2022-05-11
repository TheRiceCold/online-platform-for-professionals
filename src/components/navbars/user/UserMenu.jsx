import {
  Flex, Stack,
  Heading, Text,
  Avatar, AvatarBadge,
  MenuButton, MenuDivider,
  Menu, MenuList, MenuItem,
} from "@chakra-ui/react"
import {Fragment} from "react"
import {useAuth} from "@/context/AuthContext"
import {TriangleDownIcon} from "@chakra-ui/icons"

const UserMenu = () => {
  const {user} = useAuth()

  const MENU_ITEMS = [
    {
      label: "Profile", 
      handleOnClick: () => { }
    },
    {
      label: "Settings",
      handleOnClick: () => { }
    },
    "divider",
    {
      label: "Sign out",
      handleOnClick: user.signOut
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
            <Heading size="3x1">{user.fullname}</Heading>
            <Text>{user.role}</Text>
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
