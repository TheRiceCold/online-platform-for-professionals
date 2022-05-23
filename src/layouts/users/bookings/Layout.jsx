import styles from '@/styles/Bookings.module.sass';

import TabBar from './TabBar';
import BookingsList from './BookingsList';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Pagination from '../professionals/Pagination';
import { bookingLinks } from '@/data/mock_links';

function BookingsLayout() {
	const [tabStatus, setTabStatus] = useState('active');

	return (
		<section className={styles.layout}>
			<Box className={styles.bookingContainer} width={[1, 3 / 4]}>
				<TabBar tabStatus={tabStatus} setTabStatus={setTabStatus} />
				<BookingsList tabStatus={tabStatus} />
			</Box>
			{/* bookingLinks pass is changed based on response*/}
			<Pagination links={bookingLinks} />
		</section>
	);
}

export default BookingsLayout;
