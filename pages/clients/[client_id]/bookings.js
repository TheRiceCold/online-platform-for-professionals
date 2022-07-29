import styles from '@/styles/Bookings.module.sass'

import Layout from "@/bookings_layout";
import Meta from "@/components/Meta";
import Navbar from "@/navbar";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";

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
