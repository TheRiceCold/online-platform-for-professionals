import styles from "@/styles/professionals/Professionals.module.sass"

import {Box} from "@chakra-ui/react"
import Pagination from "./Pagination"
import ProfileDescription from "./ProfileDescription"

import {mockUsers} from "@/data/mock_professionals"

const UsersSidebar = ({ img, isLoading }) => {
	return (
		<Box className={styles.resultNavigationContainer}>
			{/*TODO Insert get /professionals/search here */}
			{mockUsers.map((user, i) => {
				return (
					<ProfileDescription
						key={i}
						user={user}
						img={img}
						isLoading={isLoading}
					/>
				)
			})}
			<Pagination />
		</Box>
	)
}

export default UsersSidebar
