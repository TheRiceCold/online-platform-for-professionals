import styles from '@/styles/Bookings.module.sass';
import { InfoIcon } from '@chakra-ui/icons';

import { Box, Button, Tooltip, Text } from '@chakra-ui/react';

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
				<Tooltip
					// TODO Change label based on if the current user is a professional or client
					// Client label:
					// label='Wait for the professional to mark your appointment as finished before you can add a review'
					// Professional label:
					label="Mark an appointment as finished so your clients can add a review for you!"
					fontSize="md"
				>
					<InfoIcon />
				</Tooltip>
				<Text mx={2}>Pending</Text>
			</Button>
			<Button
				variant="ghost"
				className={isCurrentPage('finished')}
				onClick={() => setTabStatus('finished')}
			>
				{/* TODO Add condition to render Tooltip if current user is a client
					Client label:
					*/}
				{/* <Tooltip
					label="Add a review to professionals with finished appointments"
					fontSize="md"
				>
					<InfoIcon />
				</Tooltip> */}
				<Text mx={2}>Finished</Text>
			</Button>
			<Button
				variant="ghost"
				className={isCurrentPage('canceled')}
				onClick={() => setTabStatus('canceled')}
			>
				Canceled
			</Button>
		</Box>
	)
}

export default TabBar
