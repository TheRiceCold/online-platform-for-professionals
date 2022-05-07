import {
  Flex, Text,
  Menu, MenuButton, 
  MenuList, MenuItem
} from "@chakra-ui/react"
import {
  HamburgerIcon, TriangleDownIcon
} from "@chakra-ui/icons"

const UserMenu = () => {

  return (
    <Menu>
      <MenuButton>
        <Flex>
          <HamburgerIcon/>
        </Flex> 
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
}

export default UserMenu
