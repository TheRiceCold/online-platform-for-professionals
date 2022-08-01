import styles from "~/styles/users/Professionals.module.sass";

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";
import { useRouter } from "next/router";

import Layout from "~/layouts/users/professionals/portfolio/Layout";

function Portfolio() {
	const { navLinks } = useUsers("professional");
	const { userFullname, userRole } = useAuth();

  const title = `${userFullname} | Work Portfolio`;
  const router = useRouter();

  if (userRole !== "professional") router.push("/");

	return (
    <> 
      {userRole === "professional" &&
        <main className={styles.main}>
          <Meta title={title} />
          <Navbar styles={styles} links={navLinks} />
          <Layout />
        </main>
      }
    </>
	)
}

export default Portfolio
