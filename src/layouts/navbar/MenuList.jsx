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
import {useRouter} from "next/router"
import {useAppState} from "@/context/state/Context"

function MenuList(props) {
  const {user, img, fullname} = props
  const useModal = useDisclosure()
  const {useAuth} = useAppState()
  const {logout} = useAuth()
  const router = useRouter()

  return (
    <>
      <ChakraMenuList>
        <Flex alignItems="center" ml={3}>
          <Avatar size="md" src={img}/>
          <Stack ml={2} spacing={0}>
            <Heading size="3x1">
            </Heading>
            <Text>{fullname}</Text>
          </Stack>
        </Flex>
        <MenuDivider/>
        {menuItems(user, router, logout, useModal.onOpen)
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

const menuItems = (user, router, logout, onOpen) => [
  {
    label: "Profile", 
    handleOnClick: () => 
      router.push(`/professionals/${user.id}`)
  },
  {
    label: "Connections", 
    handleOnClick: () => 
      router.push(`/professionals/${user.id}/connections`)
  },
  {
    label: "Settings",
    handleOnClick: onOpen
  },
  "divider",
  {
    label: "Sign out",
    handleOnClick: logout
  }
]
