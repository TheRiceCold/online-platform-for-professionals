import styles from "@/styles/users/Professionals.module.sass"

import {Box} from "@chakra-ui/react"
import Pagination from "./Pagination"
import ProfileDescription from "./ProfileDescription"

import {useQuery} from "react-query"
import {useUsers} from "@/users_context"

const UsersSidebar = () => {
  const {getProfessionals} = useUsers("professional")
  const {data: professionals, isLoading} = useQuery("professionals", getProfessionals)

	return (
		<Box className={styles.resultNavigationContainer}>
			{/*TODO Insert get /professionals/search here */}
      {!isLoading && 
        professionals?.data?.map((user, idx) => {
          console.log(user)
          return (
            <ProfileDescription
              key={idx}
              user={user}
              img={""}
              isLoading={isLoading}
            />
          )
        })
      }
			<Pagination />
		</Box>
	)
}

export default UsersSidebar
