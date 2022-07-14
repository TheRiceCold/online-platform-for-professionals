import {
  Text, Avatar,
  Menu, MenuButton, 
  Box, HStack, VStack, 
} from "@chakra-ui/react"
import MenuList from "./MenuList"
import {ChevronDownIcon} from "@chakra-ui/icons"

import {useAuth} from "@/auth_context"
import {capitalize} from "@/utils/stringHelpers"

const UserMenu = () => {
  const {userImage, userFullname, userRole} = useAuth()

  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Avatar size="sm" src={userImage}/>
          <VStack
            display={{ base: 'none', md: 'flex' }}
            alignItems="flex-start"
            spacing="1px"
            ml="2">
            <Text fontSize="sm">{userFullname}</Text>
            <Text fontSize="xs" color="gray.500">
              {capitalize(userRole)}
            </Text>
          </VStack>
          <Box display={{ base: 'none', md: 'flex' }}>
            <ChevronDownIcon />
          </Box>
        </HStack>
      </MenuButton>
      <MenuList />
    </Menu>
  )
}

export default UserMenu
