import {
  MenuItem,
  Flex, Stack,
  useDisclosure,
  Heading, Text,
  Avatar, MenuDivider, 
  MenuList as ChakraMenuList, 
} from "@chakra-ui/react"
import {Fragment} from "react"
import dynamic from "next/dynamic"
import {useAuth} from "@/context/auth/Context"
import {useUsers} from "@/context/users/Context"

function MenuList() {
  const useModal = useDisclosure()
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
        {menuItems(useModal.onOpen)
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
      {useModal.isOpen && <SettingsModal {...useModal}/>}
    </>
  )
}

export default MenuList

const SettingsModal = dynamic(() => import("./SettingsModal"))
