import {
  Text, Avatar,
  Menu, MenuButton, 
  Box, HStack, VStack, 
} from "@chakra-ui/react";
import MenuList from "./MenuList";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { capitalize } from "~/lib/utils/stringHelpers";
import { useAuth } from "~/contexts/auth/Context";

const UserMenu = () => {
  const {
    userRole,
    userImage, 
    userFullname, 
  } = useAuth();

  return (
    <Menu>
      <MenuButton>
        <HStack>
          <Avatar size="sm" src={userImage}/>
          <VStack
            ml="2"
            spacing="1px"
            alignItems="flex-start"
            display={{ base: 'none', md: 'flex' }}
          >
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
  );
};

export default UserMenu;
