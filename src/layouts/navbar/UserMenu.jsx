import {
  Menu, Flex,
  MenuButton, 
  Avatar, AvatarBadge,
} from "@chakra-ui/react"
import MenuList from "./MenuList"
import {TriangleDownIcon} from "@chakra-ui/icons"

const UserMenu = props => (
  <Menu>
    <MenuButton>
      <Flex align="center">
        <Avatar 
          mr={1} 
          size="xs" 
          src={props.img}
        >
          <AvatarBadge boxSize='1.25em' bg='green.400' />
        </Avatar>
        <TriangleDownIcon 
          boxSize={2.5} 
          color="gray.600"
        />
      </Flex>
    </MenuButton>
    <MenuList {...props} />
  </Menu>
)

export default UserMenu
