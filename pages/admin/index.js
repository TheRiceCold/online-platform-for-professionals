import styles from "@/styles/Admin.module.sass";

import AdminLayout from "@/layouts/users/admin/Layout";
import Navbar from "@/layouts/navbar/Navbar";
import Meta from "@/components/Meta";

import { useUsers } from "@/users_context";
import { useAuth } from "@/auth_context";

const Admin = () => {
  const title = `${userFullname} | Admin`;
  const { navLinks } = useUsers("admin");
  const { userFullname } = useAuth();

  return (
    <main className={styles.main}>
      <Meta title={title} />
      <Navbar styles={styles} links={navLinks} />
      <AdminLayout />
    </main>
  )
}

export default Admin
