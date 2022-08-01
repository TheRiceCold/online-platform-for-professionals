import styles from "~/styles/users/Professionals.module.sass";

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";

import Layout from "~/layouts/users/professionals/search/Layout";

const Professionals = () => {
  const { userRole } = useAuth();
  const { navLinks } = useUsers(userRole);

	return (
		<main className={styles.main}>
      <Meta title="Professionals" />
			<Navbar styles={styles} links={navLinks} />
			<Layout />
		</main>
	);
};

export default Professionals;
