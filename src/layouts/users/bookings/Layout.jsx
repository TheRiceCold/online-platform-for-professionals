import styles from '@/styles/Bookings.module.sass';

import TabBar from './TabBar';
import BookingsList from './BookingsList';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

function BookingsLayout() {
	const [tabStatus, setTabStatus] = useState('active');

	return (
		<section className={styles.layout}>
			<Box className={styles.bookingContainer} width={[1, 3 / 4]}>
				<TabBar tabStatus={tabStatus} setTabStatus={setTabStatus} />
				<BookingsList tabStatus={tabStatus} />
			</Box>
		</section>
	);
}

export default BookingsLayout;
