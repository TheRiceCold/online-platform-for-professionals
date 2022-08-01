import styles from "~/styles/Home.module.sass";

import { useAuth } from "~/contexts/auth/Context";
import { Meta, Navbar } from "~/components";
import { useRouter } from "next/router";

import HomeLayout from "~/layouts/HomeLayout";
import Footer from "~/layouts/Footer";

const Home = () => {
  const router = useRouter();
  const { userRole, user } = useAuth();

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
      <Navbar styles={styles} links={[
        { type: "button", label: "Login", href: "/login" },
        { type: "button", label: "Sign up", href: "/signup" },
      ]}/>
      <Meta title="Home" />
      <HomeLayout />
      <Footer />
    </main>
  );
};

export default Home;
