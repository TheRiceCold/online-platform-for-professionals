import styles from '@/styles/Professionals.module.sass';

import Navbar from '../navbar/Navbar';
import { useUsers } from '@/context/users/Context';
import SearchResults from '../../components/search/SearchResults';

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
			<section className={styles.layout}>
				<SearchResults userImg={userImg} isLoading={isLoading} />
			</section>
		</>
	);
};

export default SearchLayout;
