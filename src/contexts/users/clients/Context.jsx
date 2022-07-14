import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/auth_context"
import {userNavLinks} from "./userNavLinks"
import {userMenuItems} from "./userMenuItems"
import {useDisclosure} from "@chakra-ui/react"

const ClientsContext = createContext()

const ClientsProvider = ({ children }) => {
	const { Provider } = ClientsContext
	const { user, logout } = useAuth()
	const call = new Actions(user)

	const menuItems = settingsModal =>
		userMenuItems(settingsModal, logout)


  const navModals = {
    subscriptions: useDisclosure(),
    myProfessionals: useDisclosure()
  }

  const navLinks = userNavLinks(user.clientId, navModals) 

	return (
		<Provider
			value={{
				navLinks,
				menuItems,
        navModals,

				getClients: call.getAll,
				getClient: call.getById,
				deleteClient: call.delete,
			}}
		>
			{children}
		</Provider>
	);
};

export {ClientsContext, ClientsProvider}
