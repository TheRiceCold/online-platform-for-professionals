import styles from '@/styles/Professionals.module.sass';

import { mockUsers } from '../../temporaryMocks/mock_professionals';
import ProfessionalDescription from '../../components/search/ProfessionalDescription';
import { Box } from '@chakra-ui/react';
import Pagination from '@/components/search/Pagination';

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
