import {
  Flex, Text, Avatar, AvatarBadge,
  Menu, MenuButton, MenuList, MenuItem
} from "@chakra-ui/react"
import {TriangleDownIcon} from "@chakra-ui/icons"

const UserMenu = () => (
  <Menu>
    <MenuButton>
      <Avatar size="xs">
        <AvatarBadge boxSize='1.25em' bg='green.400' />
      </Avatar>
      <Flex align="center">
        <Text 
          mr={0.5}
          fontSize={14}
          color="gray.600"
        >Me</Text>
        <TriangleDownIcon 
          boxSize={3} 
          color="gray.600"
        />
      </Flex>
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
)

export default UserMenu
