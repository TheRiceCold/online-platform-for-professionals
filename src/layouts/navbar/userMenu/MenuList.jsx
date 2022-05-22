import {
  MenuItem, MenuDivider, 
  MenuList as ChakraMenuList, 
} from "@chakra-ui/react"
import {Fragment} from "react"

import AccountSettingsModal from "../modals/AccountSettingsModal"
import CalendlyTokenModal from "../modals/CalendlyTokenModal"
import FieldSettingsModal from "../modals/FieldSettingsModal"

import {useDisclosure} from "@chakra-ui/react"
import {useAuth} from "@/contexts/auth/Context"
import {useUsers} from "@/contexts/users/Context"

function MenuList() {
  const {userRole} = useAuth()
  const {menuItems} = useUsers(userRole)

  const accountSettingsModal = useDisclosure()
  const calendlyTokenModal = useDisclosure()
  const fieldSettingsModal = useDisclosure()

  return (
    <>
      <ChakraMenuList>
        {menuItems({
          openAccountSettings: accountSettingsModal.onOpen,
          openCalendlyToken: calendlyTokenModal.onOpen,
          openFieldSettings: fieldSettingsModal.onOpen,
        })
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
      {accountSettingsModal.isOpen && 
        <AccountSettingsModal {...accountSettingsModal}/>
      }
      {calendlyTokenModal.isOpen && 
        <CalendlyTokenModal {...calendlyTokenModal}/>
      }
      {fieldSettingsModal.isOpen && 
        <FieldSettingsModal {...fieldSettingsModal}/>
      }
    </>
  )
}

export default MenuList
