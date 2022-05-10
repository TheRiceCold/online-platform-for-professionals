import {
  Flex, Stack,
  Heading, Text,
  Avatar, AvatarBadge,
  MenuButton, MenuDivider,
  Menu, MenuList, MenuItem,
} from "@chakra-ui/react"
import {useStorage} from "@/hooks/useStorage"
import {TriangleDownIcon} from "@chakra-ui/icons"

const UserMenu = () => {
  const storage = useStorage()

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
      handleOnClick: () => {
        storage.removeItem({type: "session", key: "auth"})
        location.reload()
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
            <Heading size="3x1">Name</Heading>
            <Text>Role</Text>
          </Stack>
        </Flex>
        <MenuDivider />
        {MENU_ITEMS.map(item => ( 
          <> 
            {item === "divider" ?
              <MenuDivider/> :
              <MenuItem 
                key={item.label} 
                onClick={item.handleOnClick}
              >
                {item.label}
              </MenuItem>
            }
          </>
        ))}
      </MenuList>
    </Menu>
  )
}

export default UserMenu
