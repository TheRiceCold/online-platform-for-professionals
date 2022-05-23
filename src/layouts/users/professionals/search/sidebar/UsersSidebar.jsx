import styles from "@/styles/users/Professionals.module.sass"

import Pagination from "./Pagination"
import {Box, Flex} from "@chakra-ui/react"
import MoonLoader from "react-spinners/ClipLoader"
import ProfileDescription from "./ProfileDescription"

import {useQuery} from "react-query"
import {useUsers} from "@/users_context"

const UsersSidebar = props => {
  const {setSelectedId} = props
  const {getProfessionals} = useUsers("professional")
  const {data: professionals, isLoading} = useQuery(
    "professionals", 
    getProfessionals, {
      select: data => data.data
    }
  )

	return (
    <Box className={styles.users_sidebar}>
			{/*TODO Insert get /professionals/search here */}
      {!isLoading ?
        professionals?.map((user, idx) => {
          return (
            <ProfileDescription
              img={""}
              key={idx}
              user={user}
              isLoading={isLoading}
              setSelectedId={setSelectedId}
            />
          )
        }) : (
          <Flex justify="center" mt={4}>
            <MoonLoader color="white" size={50}/> 
          </Flex>
        )
      }
			<Pagination />
		</Box>
	);
};

export default UsersSidebar;
