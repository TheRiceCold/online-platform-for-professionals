import styles from "@/styles/users/Professionals.module.sass";

import Layout from "@/professionals_layout/search/Layout";
import Navbar from "@/layouts/navbar/Navbar";
import Meta from "@/components/Meta";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";

const Professionals = () => {
  const {userRole} = useAuth();
  const {navLinks} = useUsers(userRole);

	return (
		<main className={styles.main}>
      <Meta title="Professionals" />
			<Navbar styles={styles} links={navLinks}/>
			<Layout/>
		</main>
	)
}

export default Professionals
