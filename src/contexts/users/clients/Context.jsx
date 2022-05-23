import Actions from "./Actions"

import {createContext} from "react"
import {useAuth} from "@/auth_context"
import {userNavLinks} from "./userNavLinks"
import {userMenuItems} from "./userMenuItems"

const ClientsContext = createContext()

const ClientsProvider = ({ children }) => {
	const { Provider } = ClientsContext
	const { user, logout } = useAuth()
	const call = new Actions(user)

	const menuItems = settingsModal =>
		userMenuItems(settingsModal, logout)

  const navLinks = modals => 
    userNavLinks(user.clientId, modals) 

	return (
		<Provider
			value={{
				menuItems,
				navLinks,

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
