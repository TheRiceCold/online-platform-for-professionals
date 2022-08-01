import Actions from "./Actions"

import { useDisclosure } from "@chakra-ui/react";
import { userMenuItems } from "./userMenuItems";
import { userNavLinks } from "./userNavLinks";
import { useAuth } from "../../auth/Context";
import { createContext } from "react";

const ClientsContext = createContext();

const ClientsProvider = ({ children }) => {
	const { user, logout } = useAuth();
	const call = new Actions(user);

	const menuItems = settingsModal =>
		userMenuItems(settingsModal, logout);

  const navModals = {
    subscriptions: useDisclosure(),
    myProfessionals: useDisclosure()
  };

  const navLinks = userNavLinks(user.clientId, navModals);

	return (
		<ClientsContext.Provider
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
		</ClientsContext.Provider>
	);
};

export { ClientsContext, ClientsProvider }
