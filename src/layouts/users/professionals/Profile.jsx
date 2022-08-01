import styles from "~/styles/users/Profile.module.sass";

import { capitalize } from "~/lib/utils/stringHelpers";
import { useUsers } from "~/contexts/users/Context";
import { useAuth } from "~/contexts/auth/Context";
import { useQuery } from "react-query";
import { Navbar } from "~/components";
import {
  Skeleton,
  Heading,
  Avatar, 
  Flex, 
} from "@chakra-ui/react";

import RegisterModal from "~/components/modals/RegisterModal";

function ProfessionalLayout({ id }) {
  const { getProfessional } = useUsers("professional");
  const { userImage, userRole, user } = useAuth(); // Temporary Image
  const { navLinks } = useUsers(userRole);

  const { data, isError, isLoading } = useQuery(
    ["professional", id],
    getProfessional, 
    { retry: false }
  );

  const attributes = data?.data.attributes.field;
  const details = data?.included[0].attributes;
  const fullname = capitalize(`${details?.firstName} ${details?.lastName}`);
  const location = capitalize(`${details?.city}, ${details?.region}, Philippines`);
  const field = attributes?.field

  const workPortfolios = data?.data.relationships.workPortfolios.data;
  const workPortfolioSize = workPortfolios?.length;
  const recentPortfolio = !!workPortfolioSize && workPortfolios[workPortfolioSize];

  const services = data?.data.relationships.services.data;
  const servicesSize = workPortfolios?.length;
  const recentService = !!servicesSize && services[servicesSize];

  {/*  CHECK IF USER is REGISTERED AS PROFESSIONAL */}
  return (!user.professionalId && userRole === "professional" ? <RegisterModal/> :
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
                    <p>+63{details?.contactNumber}</p>
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
  );
}

export default ProfessionalLayout;
