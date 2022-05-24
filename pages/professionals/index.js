import styles from '@/styles/users/Professionals.module.sass';

import Head from 'next/head';
import Navbar from '@/layouts/navbar/Navbar';
import Layout from '@/professionals_layout/search/Layout';
import ClienteleModal from '@/layouts/modals/ClienteleModal';
import SubscribersModal from '@/layouts/modals/SubscribersModal';
import SubscriptionsModal from '@/layouts/modals/SubscriptionsModal';
import MyProfessionalsModal from '@/layouts/modals/MyProfessionalsModal';

import { useAuth } from '@/auth_context';
import { useUsers } from '@/users_context';
import { useDisclosure } from '@chakra-ui/react';

const Professionals = () => {
	const { userRole } = useAuth();
	const { navLinks } = useUsers(userRole);

	const professionalModal = {
		clienteleModal: useDisclosure(),
		subscribersModal: useDisclosure(),
	};

	const clientModal = {
		subscriptionsModal: useDisclosure(),
		myProfessionalsModal: useDisclosure(),
	};

	const modals = userRole === 'professional' ? professionalModal : clientModal;

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals</title>
			</Head>
			<Navbar styles={styles} modals={modals} links={navLinks(modals)} />
			<Layout />

			{userRole === 'client'
				? (modals && modals.subscriptionsModal.isOpen && (
						<SubscriptionsModal {...modals.subscriptionsModal} />
				  )) ||
				  (modals && modals.myProfessionalsModal.isOpen && (
						<MyProfessionalsModal {...modals.myProfessionalsModal} />
				  ))
				: (modals && modals.clienteleModal.isOpen && (
						<ClienteleModal {...modals.clienteleModal} />
				  )) ||
				  (modals && modals.subscribersModal.isOpen && (
						<SubscribersModal {...modals.subscribersModal} />
				  ))}
		</main>
	);
};

export default Professionals;
