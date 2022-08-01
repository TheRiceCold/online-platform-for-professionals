import styles from "~/styles/Bookings.module.sass";

import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";
import { useRouter } from "next/router";

import Layout from "~/layouts/users/bookings/Layout";

function ProfessionalBookings() {
	const { navLinks } = useUsers("professional");
	const { userRole, userFullname } = useAuth();

  const title = `${userFullname} | Bookings`;
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

export default ProfessionalBookings
