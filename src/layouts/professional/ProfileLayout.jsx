import styles from "@/styles/Professionals.module.sass"

import Header from "./Header"
import RegisterModal from "./RegisterModal"

import { useState } from "react"
import { Alert } from "@chakra-ui/react"

function ProfessionalLayout() {
  const [alerts, setAlerts] = useState()

  return (
    <>
      {alerts && 
        alerts.map((alert, i) => (
          <Alert key={i} {...alert}/>
      ))}
      <section className={styles.layout}>
        <Header/>
        <RegisterModal setAlerts={setAlerts}/>
      </section>
    </>
  )
}

export default ProfessionalLayout
