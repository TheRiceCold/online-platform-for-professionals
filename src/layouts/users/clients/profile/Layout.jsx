import styles from "@/styles/users/Profile.module.sass"

import {Flex, Avatar} from "@chakra-ui/react"

import {useQuery} from "react-query"
import {useAuth} from "@/auth_context"
import {useConnections} from "@/connections_context"

const ClientLayout = () => {
  const {
    userImage,
    userEmail,
    userFullname,
    userLocation,
    userContactNumber,
  } = useAuth()

  const {getSubscriptions} = useConnections()
  const {data: subscriptions} = useQuery("subscriptions", getSubscriptions)

	return (
		<>
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
          <h4>Client</h4>
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
            <h3>Connections</h3>
            <div className={styles.portfolio_data}>
              <div className={styles.data}>
                <h4>Subscriptions</h4> 
                <p>{subscriptions?.length}</p> 
              </div>
              <div className={styles.data}>
                <h4>My Professionals</h4> 
                <p>0</p> 
              </div>
            </div>
          </div>

        </article>
			</Flex>
		</>
	);
};

export default ClientLayout;
