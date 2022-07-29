import styles from "@/styles/users/Professionals.module.sass"

import Layout  from "@/professionals_layout/services/Layout"
import Meta from "@/components/Meta";
import Navbar from "@/navbar";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";
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

export default Services
