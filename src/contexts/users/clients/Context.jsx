import Actions from './Actions';

import { navLinks } from './navLinks';
import { createContext } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/Context';
import { userMenuItems } from './userMenuItems';

const ClientsContext = createContext();

const ClientsProvider = ({ children }) => {
	const { Provider } = ClientsContext;
	const { user, logout } = useAuth();
	const router = useRouter();
	const call = new Actions(user);

	const menuItems = (openSettings) =>
		userMenuItems(user, router, logout, openSettings);

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

export { ClientsContext, ClientsProvider };
