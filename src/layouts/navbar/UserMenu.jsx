import {
  Menu, Flex,
  MenuButton, 
  Avatar, AvatarBadge,
} from "@chakra-ui/react"
import MenuList from "./MenuList"
import {TriangleDownIcon} from "@chakra-ui/icons"

import {useAuth} from "@/context/auth/Context"

const UserMenu = () => {
  const {userImage} = useAuth()

  return (
    <Menu>
      <MenuButton>
        <Flex align="center">
          <Avatar 
            mr={1} 
            size="xs" 
            src={userImage}
          >
            <AvatarBadge boxSize='1.25em' bg='green.400' />
          </Avatar>
          <TriangleDownIcon 
            boxSize={2.5} 
            color="gray.600"
          />
        </Flex>
      </MenuButton>
      <MenuList />
    </Menu>
  )
}

export default UserMenu
