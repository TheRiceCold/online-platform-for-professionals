import { useAuth } from "../../auth/Context";
import { userMenuItems } from "./menuItems";
import { useRouter } from "next/router";
import { navLinks } from "./navLinks";
import { createContext } from "react";

import fakeUsers from "./fakeUsers.json";
import UserTable from "./UserTable";

const AdminContext = createContext();

const AdminProvider = ({ children }) => {
	const router = useRouter();
	const { user, logout } = useAuth();

	const menuItems = openSettings =>
		userMenuItems(user, router, logout, openSettings);

	return (
		<AdminContext.Provider
			value={{
				menuItems,
				navLinks: navLinks(user.id),

				fakeUsers,
				userTable: UserTable,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
};

export { AdminContext, AdminProvider };
