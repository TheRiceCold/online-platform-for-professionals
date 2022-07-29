import styles from "@/styles/users/Profile.module.sass"

import Layout from "@/clients_layout/profile/Layout";
import Meta from "@/components/Meta";
import Navbar from "@/navbar";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";

const Client = () => {
  const { userFullname, userRole } = useAuth();
  const { navLinks } = useUsers("client");

  const title = `${userFullname} | Client`;
  const router = useRouter();

  if (userRole !== "client") router.push("/");

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

export default Client
