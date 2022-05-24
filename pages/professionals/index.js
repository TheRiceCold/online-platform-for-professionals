import styles from '@/styles/users/Professionals.module.sass';

import Head from 'next/head';
import Navbar from '@/layouts/navbar/Navbar';
import Layout from '@/professionals_layout/search/Layout';
import SubscriptionsModal from '@/layouts/modals/SubscriptionsModal';
import MyProfessionalsModal from '@/layouts/modals/MyProfessionalsModal';

// import { useAuth } from '@/auth_context';
import { useUsers } from '@/users_context';
import { useDisclosure } from '@chakra-ui/react';

const Professionals = () => {
	// const { userRole } = useAuth();
	// const { navLinks: professional } = useUsers('professional');
	const { navLinks } = useUsers('client');

	// const links = userRole === 'client' ? client : professional;

	// const modals = {
	// 	clienteleModal: useDisclosure(),
	// 	subscribersModal: useDisclosure(),
	// };

	const modals = {
		subscriptionsModal: useDisclosure(),
		myProfessionalsModal: useDisclosure(),
	};
	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals</title>
			</Head>
			<Navbar styles={styles} modals={modals} links={navLinks(modals)} />
			<Layout />
			{modals && modals.subscriptionsModal.isOpen && (
				<SubscriptionsModal {...modals.subscriptionsModal} />
			)}
			{modals && modals.myProfessionalsModal.isOpen && (
				<MyProfessionalsModal {...modals.myProfessionalsModal} />
			)}
		</main>
	);
};

export default Professionals;
