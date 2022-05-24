import styles from "@/styles/users/Profile.module.sass"

import RegisterModal from "./RegisterModal"
import Navbar from "@/layouts/navbar/Navbar"
import {
  Flex, 
  Avatar, 
  Heading,
  Skeleton,
} from "@chakra-ui/react"

import {useQuery} from "react-query"
import {useAuth} from "@/auth_context"
import {useUsers} from "@/users_context"
import { capitalize } from "@/utils/stringHelpers"

function ProfessionalLayout({id}) {
  const {user} = useAuth()
  const {userImage} = useAuth() // Temporary Image
  const {navLinks, getProfessional} = useUsers("professional")

  const {data, isError, isLoading} = useQuery(
    ["professional", id],
    getProfessional, {
      retry: false
    })

  const attributes = data?.data.attributes.field
  const details = data?.included[0].attributes
  const fullname = capitalize(`${details?.firstName} ${details?.lastName}`)
  const location = capitalize(`${details?.city}, ${details?.region}, Philippines`)
  const field = attributes?.field

  const workPortfolios = data?.data.relationships.workPortfolios.data
  const workPortfolioSize = workPortfolios?.length
  const recentPortfolio = !!workPortfolioSize && workPortfolios[workPortfolioSize]

  const services = data?.data.relationships.services.data
  const servicesSize = workPortfolios?.length
  const recentService = !!servicesSize && services[servicesSize]


  {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
  return (!user.professionalId ? <RegisterModal/> :
    <>
      <Navbar styles={styles} links={navLinks}/>
      {isError ? <Heading>User not found</Heading>
      :
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
            <h4>{fullname}</h4>
            <h4>{field}</h4>
            <p>{location}</p>
          </article>

          <article className={styles.right}>
            <div className={styles.user_info}>
              <h3>Information</h3>
              <div className={styles.user_data}>
                <div className={styles.data}>
                  <h4>Email</h4>
                  <Skeleton isLoaded={!isLoading}>
                    <p>{details?.email}</p>
                  </Skeleton>
                </div>
                <div className={styles.data}>
                  <h4>Contact Number</h4>
                  <Skeleton isLoaded={!isLoading}>
                    <p>0{details?.contactNumber}</p>
                  </Skeleton>
                </div>
              </div>
            </div>

            <div className={styles.work_portfolio}>
              <h3>Work</h3>
              <div className={styles.portfolio_data}>
                <div className={styles.data}>
                  <h4>Recent Portfolio</h4> 
                  <Skeleton isLoaded={!isLoading}>
                    <p>{!!workPortfolioSize ? recentPortfolio : "No Work Portfolios"}</p> 
                  </Skeleton>
                </div>
                <div className={styles.data}>
                  <h4>Recent Service</h4> 
                  <p>{!!servicesSize ? recentService : "No Service yet"}</p> 
                </div>
              </div>
            </div>
          </article>
        </Flex> 
      }
    </>
  )
}

export default ProfessionalLayout
