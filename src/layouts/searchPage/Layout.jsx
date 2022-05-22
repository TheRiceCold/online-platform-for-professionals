import styles from '@/styles/Professionals.module.sass';

import Navbar from '../navbar/Navbar';
import { useUsers } from '@/context/users/Context';
import ProfessionalOverview from './ProfessionalOverview';
import SearchResultNavigation from './SearchResultNavigation';

const SearchLayout = ({ fullname }) => {
	const { navLinks, userMenuItems, userImg, isLoading } = useUsers('client');

	return (
		<>
			<Navbar
				styles={styles}
				fullname={fullname}
				userMenuItems={userMenuItems}
				links={navLinks}
			/>
			<section className={styles.searchResultsLayout}>
				<SearchResultNavigation img={userImg} isLoading={isLoading} />
				{/*TODO Remove img and isloading when link route is available */}
				<ProfessionalOverview img={userImg} isLoading={isLoading} />
			</section>
		</>
	);
};

export default SearchLayout;
