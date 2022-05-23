import styles from "@/styles/users/Profile.module.sass"

import Navbar from "@/layouts/navbar/Navbar"
import RegisterModal from "../RegisterModal"
import {Flex, Avatar} from "@chakra-ui/react"

import {useQuery} from "react-query"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import {useWorkPortfolios} from "@/work_portfolios_context"

function ProfessionalLayout() {
  const {user} = useAuth()
  const {navLinks} = useUsers("professional")
  const {getWorkPortfolios} = useWorkPortfolios()
  const {
    userImage,
    userEmail,
    userFullname,
    userLocation,
    userContactNumber,
  } = useAuth()

  // const {
  //   isLoading,
  //   data: workPortfolios, 
  // } = useQuery(
  //   "work_portfolio", 
  //   getWorkPortfolios, {
  //     enabled: !!user.professionalId
  //   })

  {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
  return (user.professionalId ? 
    <>
      <Navbar styles={styles} links={navLinks}/>
      <Flex as="section" className={styles.layout}>
        <article className={styles.left}>
          <Avatar 
            top={-2}
            size="2xl" 
            src={userImage}
            position="relative"
            borderRadius="full"
            border="4px solid white"
          />
          <h4>{userFullname}</h4>
          <h4>Professional</h4>
          <p>{userLocation}</p>
        </article>

        <article className={styles.right}>

          <div className={styles.user_info}>
            <h3>Information</h3>
            <div className={styles.user_data}>
              <div className={styles.data}>
                <h4>Email</h4>
                <p>{userEmail}</p>
              </div>
              <div className={styles.data}>
                <h4>Contact Number</h4>
                <p>{userContactNumber}</p>
              </div>
            </div>
          </div>

          <div className={styles.work_portfolio}>
            <h3>Work</h3>
            <div className={styles.portfolio_data}>
              <div className={styles.data}>
                <h4>Recent Portfolio</h4> 
                <p>{'last portfolio'}</p> 
              </div>
              <div className={styles.data}>
                <h4>Recent Service</h4> 
                <p></p> 
              </div>
            </div>
          </div>

        </article>
      </Flex> 
    </> :
    <RegisterModal/>
  )
}

export default ProfessionalLayout

