import styles from "@/styles/Home.module.sass";

import HomeLayout from "@/layouts/home/Layout";
import Footer from "@/layouts/footer/Footer";
import Meta from "@/components/Meta";

import { useAuth } from "@/auth_context";
import { useRouter } from "next/router";

const Home = () => {
  const { userRole, user } = useAuth();
  const router = useRouter();

  switch(userRole) {
    case "professional": 
      const id = user.professionalId ? user.professionalId : "not_registered";
      router.push(`professionals/${id}`);
      break;
    case "client":
      router.push(`clients/${user.clientId}`);
      break;
    case "admin":
      router.push(`admin`);
      break;
  }

  return (
    <main className={styles.main}>
      <Meta title="Home" />
      <HomeLayout />
      <Footer />
    </main>
  );
};

export default Home;
