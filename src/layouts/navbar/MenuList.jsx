import {
  MenuItem,
  Flex, Stack,
  Heading, Text,
  Avatar, MenuDivider, 
  MenuList as ChakraMenuList, 
} from "@chakra-ui/react"
import {Fragment} from "react"
import Dynamic from "next/dynamic"

import {useDisclosure} from "@chakra-ui/react"
import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

const SettingsModal = Dynamic(() => import("./SettingsModal"))

function MenuList() {
  const modal = useDisclosure()
  const {
    userRole,
    userImage, 
    userFullname, 
  } = useAuth()
  const {menuItems} = useUsers(userRole)

  return (
    <>
      <ChakraMenuList>
        <Flex alignItems="center" ml={3}>
          <Avatar size="md" src={userImage}/>
          <Stack ml={2} spacing={0}>
            <Heading size="3x1">
            </Heading>
            <Text>{userFullname}</Text>
          </Stack>
        </Flex>
        <MenuDivider/>
        {menuItems(modal.onOpen)
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
      </ChakraMenuList>
      {modal.isOpen && <SettingsModal {...modal}/>}
    </>
  )
}

export default MenuList
