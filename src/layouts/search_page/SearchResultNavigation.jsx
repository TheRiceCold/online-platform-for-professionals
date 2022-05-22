import styles from "@/styles/professionals/Professionals.module.sass"

import {Box} from "@chakra-ui/react"
import Pagination from "@/components/search/Pagination"
import ProfessionalDescription from "@/components/search/ProfessionalDescription"

import {mockUsers} from "../../temporaryMocks/mock_professionals"

const SearchResultNavigation = ({ img, isLoading }) => {
	return (
		<Box className={styles.resultNavigationContainer}>
			{/*TODO Insert get /professionals/search here */}
			{mockUsers.map((user, i) => {
				return (
					<ProfessionalDescription
						key={i}
						user={user}
						img={img}
						isLoading={isLoading}
					/>
				);
			})}
			<Pagination />
		</Box>
	);
};

export default SearchResultNavigation;
