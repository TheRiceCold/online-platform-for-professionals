import styles from '@/styles/Professionals.module.sass';

import Head from 'next/head';
import Layout from '@/layouts/searchPage/Layout';
import { capitalize } from '@/utils/stringHelpers';
import { useAppState } from '@/context/state/Context';

const ProfessionalsSearch = () => {
	const { useAuth } = useAppState();
	const { user } = useAuth();
	const { firstName, lastName } = user.attributes;
	const fullname = capitalize(`${firstName} ${lastName}`);

	return (
		<main className={styles.main}>
			<Head>
				<title>Professionals Search</title>
			</Head>
			<Layout fullname={fullname} />
		</main>
	);
};

export default ProfessionalsSearch;
