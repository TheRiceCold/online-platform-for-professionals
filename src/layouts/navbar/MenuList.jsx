import {
  MenuItem,
  Flex, Stack,
  Heading, Text,
  Avatar, MenuDivider, 
  MenuList as ChakraMenuList, 
} from "@chakra-ui/react"
import {Fragment} from "react"
import SettingsModal from "./SettingsModal"

import {useDisclosure} from "@chakra-ui/react"
import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

function MenuList() {
  const modal = useDisclosure()
  const {userRole} = useAuth()
  const {menuItems} = useUsers(userRole)

  return (
    <>
      <ChakraMenuList>
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
