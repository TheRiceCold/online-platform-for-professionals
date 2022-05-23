import styles from '@/styles/Bookings.module.sass';

import { Box, Button } from '@chakra-ui/react';

const TabBar = ({ tabStatus, setTabStatus }) => {
	const isCurrentPage = (status) => {
		let className = status === tabStatus ? styles.activeTab : styles.tab;
		return className;
	};

	return (
		<Box className={styles.tabBar}>
			<Button
				variant="ghost"
				className={isCurrentPage('active')}
				onClick={() => setTabStatus('active')}
			>
				Upcoming
			</Button>
			<Button
				variant="ghost"
				className={isCurrentPage('pending')}
				onClick={() => setTabStatus('pending')}
			>
				Pending
			</Button>
			<Button
				variant="ghost"
				className={isCurrentPage('finished')}
				onClick={() => setTabStatus('finished')}
			>
				Finished
			</Button>
			<Button
				variant="ghost"
				className={isCurrentPage('canceled')}
				onClick={() => setTabStatus('canceled')}
			>
				Canceled
			</Button>
		</Box>
	);
};

export default TabBar;
