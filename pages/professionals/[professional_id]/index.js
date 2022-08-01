import styles from "~/styles/users/Profile.module.sass";

import Profile from "~/layouts/users/professionals/Profile";

import { useAuth } from "~/contexts/auth/Context";
import { useRouter } from "next/router";
import { Meta } from "~/components";

function Professional() {
  const router = useRouter();
  const { userFullname } = useAuth();

  const id = router.query['professional_id'];
  const title = `${userFullname} | Professional`;

  return (
    <main className={styles.main}>
      <Meta title={title} />
      <Profile id={id} />
    </main>
  );
}

export default Professional;
