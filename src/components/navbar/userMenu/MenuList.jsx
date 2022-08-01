import {
  MenuItem, MenuDivider, 
  MenuList as ChakraMenuList, 
} from "@chakra-ui/react";
import { Fragment } from "react";

import AccountSettingsModal from "../../modals/AccountSettingsModal";
import CalendlyTokenModal from "../../modals/CalendlyTokenModal";
import FieldSettingsModal from "../../modals/FieldSettingsModal";

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { useDisclosure } from "@chakra-ui/react";

function MenuList() {
  const { userRole } = useAuth();
  const { menuItems } = useUsers(userRole);

  const calendlyTokenModal = useDisclosure();
  const fieldSettingsModal = useDisclosure();
  const accountSettingsModal = useDisclosure();

  const menuItemsArgs = (userRole === "client") ? 
    accountSettingsModal : {
      openAccountSettings: accountSettingsModal.onOpen,
      openCalendlyToken: calendlyTokenModal.onOpen,
      openFieldSettings: fieldSettingsModal.onOpen,
    };

  return (
    <Fragment>
      <ChakraMenuList>
        {menuItems(menuItemsArgs)
          .map((item, idx) => ( 
            <Fragment key={idx}> 
              {item === "divider" ?
                <MenuDivider /> :
                <MenuItem onClick={item.handleOnClick}>
                  {item.label}
                </MenuItem>
              }
            </Fragment>
          )
        )}
      </ChakraMenuList>
      {accountSettingsModal.isOpen && 
        <AccountSettingsModal {...accountSettingsModal} />
      }
      {calendlyTokenModal.isOpen && 
        <CalendlyTokenModal {...calendlyTokenModal} />
      }
      {fieldSettingsModal.isOpen && 
        <FieldSettingsModal {...fieldSettingsModal} />
      }
    </Fragment>
  );
};

export default MenuList;
