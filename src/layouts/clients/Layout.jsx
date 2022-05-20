import styles from '@/styles/Clients.module.sass';

import Header from './Header';
import Navbar from '../navbar/Navbar';
import { useUsers } from '@/context/users/Context';
import { useQuery } from 'react-query';

const ClientLayout = ({ fullname }) => {
	const { navLinks, userMenuItems, userImg } = useUsers('client');

	// No method in context yet
	// Temporary waiting for api/context
	const { contactInfo, isLoading } = {
		contactInfo: {
			contactNumber: '12345',
			email: 'client@email.com',
			city: 'Manila',
		},
		isLoading: false,
	};
	return (
		<>
			<Navbar
				styles={styles}
				fullname={fullname}
				userMenuItems={userMenuItems}
				links={navLinks}
			/>
			<section className={styles.layout}>
				<Header
					isLoading={isLoading}
					img={userImg}
					fullname={fullname}
					location={location}
					contactInfo={contactInfo}
				/>
			</section>
		</>
	);
};

export default ClientLayout;
