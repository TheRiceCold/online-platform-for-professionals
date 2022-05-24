import styles from '@/styles/users/Professionals.module.sass';

import Head from 'next/head';
import Navbar from '@/layouts/navbar/Navbar';
import ClienteleModal from '@/layouts/modals/ClienteleModal';
import SubscribersModal from '@/layouts/modals/SubscribersModal';
import Layout from '@/professionals_layout/portfolio/Layout';

import { useAuth } from '@/auth_context';
import { useUsers } from '@/users_context';
import { useDisclosure } from '@chakra-ui/react';

function Portfolio() {
	const { userFullname } = useAuth();
	const { navLinks } = useUsers('professional');

	const modals = {
		clienteleModal: useDisclosure(),
		subscribersModal: useDisclosure(),
	};

	return (
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Work Portfolio</title>
			</Head>
			<Navbar styles={styles} modals={modals} links={navLinks(modals)} />
			<Layout />
			{modals && modals.clienteleModal.isOpen && (
				<ClienteleModal {...modals.clienteleModal} />
			)}
			{modals && modals.subscribersModal.isOpen && (
				<SubscribersModal {...modals.subscribersModal} />
			)}
		</main>
	);
}

export default Portfolio;
