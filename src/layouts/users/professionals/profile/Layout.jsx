import styles from "@/styles/professionals/Profile.module.sass"

import Header from "./Header"
import Navbar from "@/layouts/navbar/Navbar"
import RegisterModal from "../RegisterModal"
import {Flex, Avatar, Heading, Text} from "@chakra-ui/react"

import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"

function ProfessionalLayout() {
  const {user} = useAuth()
  const {navLinks} = useUsers("professional")
  const {
    userImage,
    userFullname,
    userLocation
  } = useAuth()

  {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
  return (user.professionalId ? 
    <>
      <Navbar styles={styles} links={navLinks}/>
      <Flex 
        as="section" 
        boxShadow="lg"
        className={styles.layout}
      >
        {/* <Header/> */}
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
                <p>email@email.com</p>
              </div>
              <div className={styles.data}>
                <h4>Phone</h4>
                <p>09897901212</p>
              </div>
            </div>
          </div>

          <div className={styles.work_portfolio}>
            <h3>Work Portfolios</h3>
            <div className={styles.portfolio_data}>
              <div className={styles.data}>
                <h4>Recent</h4> 
                <p>Lorem ipsum dolor sit amet.</p> 
              </div>
              <div className={styles.data}>
                <h4>Recent</h4> 
                <p>Lorem ipsum dolor sit amet.</p> 
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

