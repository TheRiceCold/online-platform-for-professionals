import styles from "~/styles/users/Profile.module.sass"

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";
import { useRouter } from "next/router";

import Profile from "~/layouts/users/clients/Profile";

function Client() {
  const { navLinks } = useUsers("client");
  const { userFullname, userRole } = useAuth();

  const router = useRouter();
  const title = `${userFullname} | Client`;

  if (userRole !== "client") 
    router.push("/");

	return (
    <>
      {userRole === "client" &&
        <main className={styles.main}>
          <Meta title={title} />
          <Navbar styles={styles} links={navLinks} />
          <Profile />
        </main>
      }
    </>
  );
}

export default Client;
