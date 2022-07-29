import styles from "@/styles/users/Profile.module.sass";

import Layout from "@/professionals_layout/profile/Layout";
import Meta from "@/components/Meta";

import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";

function Professional() {
  const {userFullname} = useAuth();
  const router = useRouter();

  const title = `${userFullname} | Professional`;
  const id = router.query['professional_id'];

  return (
    <main className={styles.main}>
      <Meta title={title} />
      <Layout id={id}/>
    </main>
  )
}

export default Professional

