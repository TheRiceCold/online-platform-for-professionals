import styles from '@/styles/users/Profile.module.sass';

import Head from 'next/head';
import Navbar from '@/layouts/navbar/Navbar';
import Layout from '@/clients_layout/profile/Layout';
import SubscriptionsModal from '@/layouts/modals/SubscriptionsModal';
import MyProfessionalsModal from '@/layouts/modals/MyProfessionalsModal';

import { useAuth } from '@/auth_context';
import { useUsers } from '@/users_context';
import { useDisclosure } from '@chakra-ui/react';

const Client = () => {
	const { navLinks } = useUsers('client');
	const { userFullname } = useAuth();

	const modals = {
		subscriptionsModal: useDisclosure(),
		myProfessionalsModal: useDisclosure(),
	};

	return (
		<main className={styles.main}>
			<Head>
				<title>{userFullname} | Client</title>
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

export default Client;
