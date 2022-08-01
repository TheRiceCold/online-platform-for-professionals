import styles from "~/styles/users/Professionals.module.sass";

import Layout  from "~/layouts/users/professionals/services/Layout";
import { Meta, Navbar }from "~/components";

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { useRouter } from "next/router";

function Services() {
  const { navLinks } = useUsers("professional");
  const { userFullname, userRole } = useAuth();

  const title = `${userFullname} | Services`;
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
  );
}

export default Services;
