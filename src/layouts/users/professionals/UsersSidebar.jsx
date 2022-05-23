import styles from "@/styles/users/Professionals.module.sass"

import {Box} from "@chakra-ui/react"
import Pagination from "./Pagination"
import ProfileDescription from "./ProfileDescription"

import {useQuery} from "react-query"
import {useUsers} from "@/users_context"

const UsersSidebar = ({setSelectedProfile}) => {
  const {getProfessionals} = useUsers("professional")
  const {data: professionals, isLoading} = useQuery("professionals", getProfessionals)

	return (
		<Box className={styles.resultNavigationContainer}>
			{/*TODO Insert get /professionals/search here */}
      {!isLoading && 
        professionals?.data?.map((user, idx) => {
          return (
            <ProfileDescription
              img={""}
              key={idx}
              user={user}
              isLoading={isLoading}
              setSelectedProfile={setSelectedProfile}
            />
          )
        })
      }
			<Pagination />
		</Box>
	)
}

export default UsersSidebar
