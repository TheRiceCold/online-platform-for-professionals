import Actions from "./Actions"

import {navLinks} from "./navLinks"
import {createContext} from "react"
import {useAuth} from "@/auth_context"
import {userMenuItems} from "./userMenuItems"

const ClientsContext = createContext()

const ClientsProvider = ({ children }) => {
	const { Provider } = ClientsContext
	const { user, logout } = useAuth()
	const call = new Actions(user)

	const menuItems = settingsModal =>
		userMenuItems(settingsModal, logout)

	return (
		<Provider
			value={{
				menuItems,
				navLinks: navLinks(user.clientId),

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
