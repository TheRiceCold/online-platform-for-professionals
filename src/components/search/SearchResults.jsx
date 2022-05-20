import styles from '@/styles/Components.module.sass';

import { mockUsers } from '../../temporaryMocks/mock_professionals';
import ProfessionalDescription from './ProfessionalDescription';
import ProfessionalOverview from './ProfessionalOverview';
import { Box } from '@chakra-ui/react';

const SearchResults = ({ img, isLoading }) => {
	return (
		<Box className={styles.searchResultsContainer}>
			<Box className={styles.descriptionContainer}>
				{mockUsers.map((user) => {
					return (
						<ProfessionalDescription user={user} img={img} isLoading={isLoading} />
					);
				})}
			</Box>
			{/* Remove img and isloading when link route is available */}
			<ProfessionalOverview img={img} isLoading={isLoading} />
		</Box>
	);
};

export default SearchResults;
