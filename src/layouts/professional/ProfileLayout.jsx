import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import Dynamic from "next/dynamic"

const RegisterModal = Dynamic(() => import("./RegisterModal"))

function ProfessionalLayout() {

  return (
    <>
      <section className={styles.layout}>
        <Header/>
        <RegisterModal/>
      </section>
    </>
  )
}

export default ProfessionalLayout

