import styles from "~/styles/Bookings.module.sass"

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";
import { useRouter } from "next/router";

import Layout from "~/layouts/users/bookings/Layout";

function ClientBookings() {
	const { userRole, userFullname } = useAuth();
	const { navLinks } = useUsers("client");

  const title = `${userFullname} | Bookings`;
  const router = useRouter();

  if (userRole !== "client")
    router.push("/");
  
	return (
    <>
      {userRole === "client" &&
        <main className={styles.main}>
          <Meta title={title} />
          <Navbar styles={styles} links={navLinks}/>
          <Layout/>
        </main>
      }
    </>
	)
}

export default ClientBookings
