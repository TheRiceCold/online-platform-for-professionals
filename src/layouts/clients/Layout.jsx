import styles from '@/styles/Clients.module.sass';

import Header from './Header';
import { useUsers } from '@/contexts/users/Context';
// import { useQuery } from 'react-query';

const ClientLayout = () => {
	const { userImg } = useUsers('client');

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
			<section className={styles.layout}>
				<Header isLoading={isLoading} img={userImg} contactInfo={contactInfo} />
			</section>
		</>
	);
};

export default ClientLayout;
