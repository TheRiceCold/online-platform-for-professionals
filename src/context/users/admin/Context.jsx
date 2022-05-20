import { createContext } from 'react';
import UserTable from './UserTable';
import fakeUsers from './fakeUsers.json';

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
	const { Provider } = AdminContext;

	return (
		<Provider
			value={{
				fakeUsers,
				userTable: UserTable,
			}}
		>
			{children}
		</Provider>
	);
};

export { AdminContext, AdminProvider };
