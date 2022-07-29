import styles from '@/styles/Bookings.module.sass'

import Layout from "@/bookings_layout";
import Meta from "@/components/Meta";
import Navbar from "@/navbar";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";

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
